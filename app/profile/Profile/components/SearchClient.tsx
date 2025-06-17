"use client"

import React, { useState, useEffect } from "react"

import {
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
} from "../Profile.style"
import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"
"use client"

// ... boshqa importlar

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

export default function SearchClient({ products = [] }: { products: Product[] }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filtered, setFiltered] = useState<Product[]>([])

  const router = useRouter()

  useEffect(() => {
    // Component yuklanganda default productlar
    setFiltered(products)
  }, [products])

  const toggleFavorite = (productId: string) => {
    setFiltered((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, isFavorite: !p.isFavorite } : p)),
    )
  }

  const handleSearch = () => {
    const filteredResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFiltered(filteredResults)
  }

  const formatPrice = (price: number) => `${price.toLocaleString()} UZS`

  return (
    <>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Type e.g Bora games"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <SearchButton onClick={handleSearch}>Поиск</SearchButton>
      </SearchContainer>

      <ProductGrid>
        {filtered && filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} onClick={() => router.push(`/product/${product.id}`)}>
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
  )
}
