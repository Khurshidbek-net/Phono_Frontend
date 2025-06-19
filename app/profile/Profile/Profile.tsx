"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"
import SettingsSection from "../../SettingsSection/page"
import {
  Container,
  Breadcrumb,
  ProfileSection,
  ProfileInfo,
  Avatar,
  UserInfo,
  UserName,
  UserStats,
  EditButton,
  TabsContainer,
  Tab,
  SearchContainer,
  SearchInput,
  SearchButton,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDetails,
  ProductPrice,
  HeartIcon,
} from "./Profile.style"
import { useUserById } from "../../../hooks"

interface Product {
  id: string
  title: string
  condition: string
  storage: string
  price: number
  image: string
  isFavorite: boolean
  isNew?: boolean
}

const Profile: React.FC = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("listings")
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState<Product[]>([])

  // ✅ To‘g‘ri: user obyektini localStorage'dan olish
  const storedUser = typeof window !== "undefined" ? localStorage.getItem("user") : null
  const userId = storedUser ? JSON.parse(storedUser).id : null

  const { data: user, isLoading, error } = useUserById(userId ?? 0)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://api.agent24.uz/api/phone")
        if (!res.ok) throw new Error("Failed to fetch products")
        const data = await res.json()

        const mappedProducts = data.map((item: any) => ({
          id: item.id.toString(),
          title: item.title,
          condition: item.is_new ? "Новый" : "Б/У",
          storage: `${item.ram} / ${item.rom}`,
          price: Number(item.price) * 12000,
          image: item.Images?.[0]?.url || "/images/default-phone.jpg",
          isFavorite: false,
          isNew: item.is_new,
        }))

        setProducts(mappedProducts)
      } catch (err) {
        console.error("Product fetch error:", err)
      }
    }

    if (userId) fetchProducts()
  }, [userId])

  const toggleFavorite = (productId: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId ? { ...product, isFavorite: !product.isFavorite } : product,
      ),
    )
  }

  const formatPrice = (price: number) => `${price.toLocaleString()} UZS`

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === "favorites" ? product.isFavorite : true
    return matchesSearch && matchesTab
  })

  if (isLoading) return <p>Загрузка...</p>
  // if (error || !user) return <p>Ошибка загрузки данных пользователя</p>

  return (
    <Container>
      <Breadcrumb>Главная &gt; Профиль</Breadcrumb>

      <ProfileSection>
        <ProfileInfo>
          <Avatar src={user?.image || "/images/avatar.png"} alt={user?.firstName} />
          <UserInfo>
            <UserName>{`${user?.firstName} ${user?.lastName || ""}`}</UserName>
            <UserStats>Баланс: {user?.balance?.toLocaleString()} сум</UserStats>
          </UserInfo>
        </ProfileInfo>
        <EditButton onClick={() => router.push("/edit-profile")}>Редактировать</EditButton>
      </ProfileSection>

      <TabsContainer>
        <Tab active={activeTab === "listings"} onClick={() => setActiveTab("listings")}>Объявления</Tab>
        <Tab active={activeTab === "messages"} onClick={() => setActiveTab("messages")}>Сообщения</Tab>
        <Tab active={activeTab === "favorites"} onClick={() => setActiveTab("favorites")}>Избранное</Tab>
        <Tab active={activeTab === "contacts"} onClick={() => setActiveTab("contacts")}>Контактные данные</Tab>
        <Tab active={activeTab === "settings"} onClick={() => setActiveTab("settings")}>Настройки</Tab>
      </TabsContainer>

      {activeTab !== "settings" && (
        <>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Type e.g Bora games"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchButton>Поиск</SearchButton>
          </SearchContainer>

          <ProductGrid>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} onClick={() => router.push(`/productDetail/${product.id}`)}>
                  <ProductImage src={product.image} alt={product.title} />
                  <HeartIcon
                    active={product.isFavorite}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(product.id)
                    }}
                  >
                    <Heart size={16} fill={product.isFavorite ? "#ff4757" : "none"} />
                  </HeartIcon>
                  {product.isNew && <div className="new-badge">Новый</div>}
                  <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductDetails>
                      <div>Состояние: {product.condition}</div>
                      <div>Память: {product.storage}</div>
                    </ProductDetails>
                    <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                  </ProductInfo>
                </ProductCard>
              ))
            ) : (
              <p>Ничего не найдено</p>
            )}
          </ProductGrid>
        </>
      )}

      {activeTab === "settings" && <SettingsSection />}
    </Container>
  )
}

export default Profile
