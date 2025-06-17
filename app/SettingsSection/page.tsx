"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { ChevronDown, ChevronUp, Plus, Trash2, User, LogOut, X } from "lucide-react"

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`

const Header = styled.div`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  padding: 1rem;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
`

const Logo = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const HeaderButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const AddButton = styled.button`
  background: white;
  color: #6366f1;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f8fafc;
  }
`

const MainContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
`

const Breadcrumb = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
`

const ProfileCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`

const ProfileDetails = styled.div`
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
  }

  p {
    color: #6b7280;
    margin: 0;
  }
`

const EditButton = styled.button`
  background: white;
  border: 1px solid #d1d5db;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f9fafb;
  }
`

const Tabs = styled.div`
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`

const Tab = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  padding: 0.5rem 0;
  color: ${(props) => (props.active ? "#3b82f6" : "#6b7280")};
  border-bottom: 2px solid ${(props) => (props.active ? "#3b82f6" : "transparent")};
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:hover {
    color: #3b82f6;
  }
`

const Section = styled.div`
  background: white;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const SectionHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
  }
`

const SectionContent = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  padding: 0 1rem 1rem 1rem;
`

const ItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`

const ItemText = styled.span`
  color: #374151;
`

const ItemSubtext = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: all 0.2s;

  &:hover {
    background-color: #fef2f2;
    color: #dc2626;
  }
`

const AddItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #3b82f6;
  cursor: pointer;
  padding: 0.75rem 0;
  font-size: 0.875rem;
  transition: color 0.2s;

  &:hover {
    color: #2563eb;
  }
`

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const RadioItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

const RadioInput = styled.input`
  margin: 0;
`

const ActionButton = styled.button<{ danger?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  color: ${(props) => (props.danger ? "#ef4444" : "#374151")};
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => (props.danger ? "#fef2f2" : "#f9fafb")};
    color: ${(props) => (props.danger ? "#dc2626" : "#111827")};
  }
`

const Modal = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  max-width: 400px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const ModalTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: #6b7280;

  &:hover {
    color: #374151;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`

const ConfirmButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  background: ${(props) => (props.disabled ? "#9ca3af" : "#6366f1")};
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => (props.disabled ? "#9ca3af" : "#5b21b6")};
  }
`

const VerificationGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const VerificationInput = styled.input`
  width: 3rem;
  height: 3rem;
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`

const VerificationText = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;

  button {
    color: #3b82f6;
    text-decoration: underline;
    background: none;
    border: none;
    cursor: pointer;
  }
`

const DialogButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`

const DialogButton = styled.button<{ variant?: "primary" | "secondary" }>`
  flex: 1;
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) =>
    props.variant === "primary"
      ? `
    background: #6366f1;
    color: white;
    border: none;
    
    &:hover {
      background: #5b21b6;
    }
  `
      : `
    background: white;
    color: #374151;
    border: 1px solid #d1d5db;
    
    &:hover {
      background: #f9fafb;
    }
  `}
`

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 1.125rem;
`

// Types
interface ProfileData {
  id: number
  name: string
  balance: string
  avatar: string
}

interface UserData {
  profile: ProfileData
  phones: string[]
  emails: string[]
  addresses: { type: string; address: string }[]
  language: string
}

// Mock API functions
const mockApi = {
  async getUserData(userId: number): Promise<UserData> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      profile: {
        id: userId,
        name: `User_${userId}`,
        balance: `${Math.floor(Math.random() * 500000)} сум`,
        avatar: `/placeholder.svg?height=60&width=60`,
      },
      phones: [
        `+998 ${90 + Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * 900) + 100} ${Math.floor(Math.random() * 90) + 10} ${Math.floor(Math.random() * 90) + 10}`,
        `+998 ${90 + Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * 900) + 100} ${Math.floor(Math.random() * 90) + 10} ${Math.floor(Math.random() * 90) + 10}`,
      ],
      emails: [`user${userId}@gmail.com`, `${userId}business@outlook.com`],
      addresses: [
        {
          type: "Дом",
          address: `ул. ${["Тараса Шевченко", "Мирзо Улугбека", "Амира Темура"][Math.floor(Math.random() * 3)]} ${Math.floor(Math.random() * 100) + 1}А, ${Math.floor(Math.random() * 50) + 1}`,
        },
        {
          type: "Офис",
          address: `ул. ${["Навои", "Бунёдкор", "Шахрисабз"][Math.floor(Math.random() * 3)]} ${Math.floor(Math.random() * 100) + 1}, ${Math.floor(Math.random() * 50) + 1}`,
        },
      ],
      language: ["Русский", "English", "Uzbek"][Math.floor(Math.random() * 3)],
    }
  },

  async addPhone(userId: number, phone: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return Math.random() > 0.1 // 90% success rate
  },

  async addEmail(userId: number, email: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return Math.random() > 0.1
  },

  async addAddress(userId: number, address: string, type: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return Math.random() > 0.1
  },

  async updateLanguage(userId: number, language: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return Math.random() > 0.05 // 95% success rate
  },

  async deleteItem(userId: number, type: string, itemId: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return Math.random() > 0.1
  },
}

export default function ProfileSettingsStyled() {
  const [userId, setUserId] = useState<number | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [openSections, setOpenSections] = useState({
    phone: true,
    email: true,
    address: true,
    language: true,
  })

  const [newItemValue, setNewItemValue] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [showVerification, setShowVerification] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false)
  const [currentAddType, setCurrentAddType] = useState<"phone" | "email" | "address" | null>(null)
  const [deleteItem, setDeleteItem] = useState<{ type: string; index: number } | null>(null)
  const [processing, setProcessing] = useState(false)

  // Load user data
  useEffect(() => {
    const loadUserData = async () => {
      try {
        setLoading(true)

        // Get userId from localStorage or generate random one
        const storedUser = localStorage.getItem("user")
        let currentUserId = 123 // default

        if (storedUser) {
          try {
            const parsed = JSON.parse(storedUser)
            currentUserId = parsed?.id || Math.floor(Math.random() * 1000) + 100
          } catch (error) {
            console.error("Error parsing user data:", error)
            currentUserId = Math.floor(Math.random() * 1000) + 100
          }
        } else {
          currentUserId = Math.floor(Math.random() * 1000) + 100
          localStorage.setItem("user", JSON.stringify({ id: currentUserId }))
        }

        setUserId(currentUserId)

        // Load user data from API
        const data = await mockApi.getUserData(currentUserId)
        setUserData(data)
      } catch (err) {
        setError("Ошибка загрузки данных")
        console.error("Error loading user data:", err)
      } finally {
        setLoading(false)
      }
    }

    loadUserData()
  }, [])

  // Refresh data periodically
  useEffect(() => {
    if (!userId) return

    const interval = setInterval(async () => {
      try {
        const data = await mockApi.getUserData(userId)
        setUserData(data)
      } catch (err) {
        console.error("Error refreshing data:", err)
      }
    }, 30000) // Refresh every 30 seconds

    return () => clearInterval(interval)
  }, [userId])

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const handleAdd = (type: "phone" | "email" | "address") => {
    setCurrentAddType(type)
    setNewItemValue("")
    setVerificationCode("")
    setShowVerification(false)
    setDialogOpen(true)
  }

  const handleConfirmAdd = async () => {
    if (!newItemValue.trim() || !currentAddType || !userId || !userData) return

    if (currentAddType === "phone" && !showVerification) {
      setShowVerification(true)
      return
    }

    setProcessing(true)
    try {
      let success = false

      if (currentAddType === "phone") {
        success = await mockApi.addPhone(userId, newItemValue)
        if (success) {
          setUserData({
            ...userData,
            phones: [...userData.phones, newItemValue],
          })
        }
      } else if (currentAddType === "email") {
        success = await mockApi.addEmail(userId, newItemValue)
        if (success) {
          setUserData({
            ...userData,
            emails: [...userData.emails, newItemValue],
          })
        }
      } else if (currentAddType === "address") {
        success = await mockApi.addAddress(userId, newItemValue, "Новый")
        if (success) {
          setUserData({
            ...userData,
            addresses: [...userData.addresses, { type: "Новый", address: newItemValue }],
          })
        }
      }

      if (!success) {
        setError("Ошибка при добавлении")
        return
      }
    } catch (err) {
      setError("Ошибка при добавлении")
      console.error("Error adding item:", err)
    } finally {
      setProcessing(false)
    }

    setDialogOpen(false)
    setNewItemValue("")
    setVerificationCode("")
    setShowVerification(false)
    setCurrentAddType(null)
  }

  const handleDeleteClick = (type: "phone" | "email" | "address", index: number) => {
    setDeleteItem({ type, index })
    setDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (!deleteItem || !userId || !userData) return

    setProcessing(true)
    try {
      const { type, index } = deleteItem
      let itemId = ""

      if (type === "phone") itemId = userData.phones[index]
      else if (type === "email") itemId = userData.emails[index]
      else if (type === "address") itemId = userData.addresses[index].address

      const success = await mockApi.deleteItem(userId, type, itemId)

      if (success) {
        if (type === "phone") {
          setUserData({
            ...userData,
            phones: userData.phones.filter((_, i) => i !== index),
          })
        } else if (type === "email") {
          setUserData({
            ...userData,
            emails: userData.emails.filter((_, i) => i !== index),
          })
        } else if (type === "address") {
          setUserData({
            ...userData,
            addresses: userData.addresses.filter((_, i) => i !== index),
          })
        }
      } else {
        setError("Ошибка при удалении")
      }
    } catch (err) {
      setError("Ошибка при удалении")
      console.error("Error deleting item:", err)
    } finally {
      setProcessing(false)
    }

    setDeleteDialogOpen(false)
    setDeleteItem(null)
  }

  const updateLanguage = async (lang: string) => {
    if (!userId || !userData) return

    try {
      const success = await mockApi.updateLanguage(userId, lang)
      if (success) {
        setUserData({
          ...userData,
          language: lang,
        })
      } else {
        setError("Ошибка при изменении языка")
      }
    } catch (err) {
      setError("Ошибка при изменении языка")
      console.error("Error updating language:", err)
    }
  }

  const getDialogTitle = () => {
    switch (currentAddType) {
      case "phone":
        return "Добавить номер"
      case "email":
        return "Добавить почту"
      case "address":
        return "Добавить адрес"
      default:
        return "Добавить"
    }
  }

  const getPlaceholder = () => {
    switch (currentAddType) {
      case "phone":
        return "Введите свой номер телефона"
      case "email":
        return "example@gmail.com"
      case "address":
        return "Введите адрес"
      default:
        return ""
    }
  }

  const renderVerificationInput = () => {
    const digits = Array.from({ length: 6 }, (_, i) => i)

    return (
      <>
        <VerificationGrid>
          {digits.map((digit) => (
            <VerificationInput
              key={digit}
              maxLength={1}
              onChange={(e) => {
                const value = e.target.value
                
                if (value && digit < 5) {
                  const nextInput = e.target.parentElement?.children[digit + 1] as HTMLInputElement
                  nextInput?.focus()
                }
              }}
            />
          ))}
        </VerificationGrid>
        <VerificationText>
          Не получается? <button>Отправить заново</button>
        </VerificationText>
      </>
    )
  }

  if (loading) {
    return <LoadingContainer>Загрузка...</LoadingContainer>
  }

  if (error) {
    return <LoadingContainer>Ошибка: {error}</LoadingContainer>
  }

  if (!userData) {
    return <LoadingContainer>Нет данных</LoadingContainer>
  }

  return (
    <Container>

      <MainContent>

        <div>
          {/* Phone Numbers */}
          <Section>
            <SectionHeader onClick={() => toggleSection("phone")}>
              <span>Номер телефона</span>
              {openSections.phone ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </SectionHeader>
            <SectionContent open={openSections.phone}>
              {userData.phones.map((phone, index) => (
                <ItemRow key={index}>
                  
                  
                  <ItemText>{phone}</ItemText>
                  <DeleteButton onClick={() => handleDeleteClick("phone", index)}>
                    <Trash2 size={16} />
                  </DeleteButton>
                </ItemRow>
              ))}
              <AddItemButton onClick={() => handleAdd("phone")}>
                <Plus size={16} />
                Добавить номер
              </AddItemButton>
            </SectionContent>
          </Section>

          {/* Email */}
          <Section>
            <SectionHeader onClick={() => toggleSection("email")}>
              <span>Почта</span>
              {openSections.email ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </SectionHeader>
            <SectionContent open={openSections.email}>
              {userData.emails.map((email, index) => (
                <ItemRow key={index}>
                  <ItemText>{email}</ItemText>
                  <DeleteButton onClick={() => handleDeleteClick("email", index)}>
                    <Trash2 size={16} />
                  </DeleteButton>
                </ItemRow>
              ))}
              <AddItemButton onClick={() => handleAdd("email")}>
                <Plus size={16} />
                Добавить почту
              </AddItemButton>
            </SectionContent>
          </Section>

          {/* Address */}
          <Section>
            <SectionHeader onClick={() => toggleSection("address")}>
              <span>Адрес</span>
              {openSections.address ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </SectionHeader>
            <SectionContent open={openSections.address}>
              {userData.addresses.map((addr, index) => (
                <div key={index}>
                  <ItemText style={{ fontWeight: "500", display: "block", marginBottom: "0.25rem" }}>
                    {addr.type}
                  </ItemText>
                  <ItemRow>
                    <ItemSubtext>{addr.address}</ItemSubtext>
                    <DeleteButton onClick={() => handleDeleteClick("address", index)}>
                      <Trash2 size={16} />
                    </DeleteButton>
                  </ItemRow>
                </div>
              ))}
              <AddItemButton onClick={() => handleAdd("address")}>
                <Plus size={16} />
                Добавить адрес
              </AddItemButton>
            </SectionContent>
          </Section>

          {/* Language */}
          <Section>
            <SectionHeader onClick={() => toggleSection("language")}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <User size={20} />
                <span>Язык приложения</span>
              </div>
              {openSections.language ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </SectionHeader>
            <SectionContent open={openSections.language}>
              <RadioGroup>
                {["Русский", "English", "Uzbek"].map((lang) => (
                  <RadioItem key={lang}>
                    <RadioInput
                      type="radio"
                      name="language"
                      checked={userData.language === lang}
                      onChange={() => updateLanguage(lang)}
                    />
                    {lang}
                  </RadioItem>
                ))}
              </RadioGroup>
            </SectionContent>
          </Section>

          {/* Logout */}
          <Section>
            <ActionButton onClick={() => setLogoutDialogOpen(true)}>
              <LogOut size={20} />
              Выйти с аккаунта
            </ActionButton>
          </Section>

          {/* Delete Account */}
          <Section>
            <ActionButton danger>
              <Trash2 size={20} />
              Удалить учетную запись
            </ActionButton>
          </Section>
        </div>
      </MainContent>

      {/* Add Item Dialog */}
      <Modal open={dialogOpen} onClick={() => setDialogOpen(false)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>{getDialogTitle()}</ModalTitle>
            <CloseButton onClick={() => setDialogOpen(false)}>
              <X size={20} />
            </CloseButton>
          </ModalHeader>
          {!showVerification ? (
            <>
              <Input
                value={newItemValue}
                onChange={(e) => setNewItemValue(e.target.value)}
                placeholder={getPlaceholder()}
              />
              <ConfirmButton onClick={handleConfirmAdd} disabled={!newItemValue.trim() || processing}>
                {processing ? "Обработка..." : currentAddType === "phone" ? "Получить код" : "Добавить"}
              </ConfirmButton>
            </>
          ) : (
            <>
              {renderVerificationInput()}
              <ConfirmButton onClick={handleConfirmAdd} disabled={processing}>
                {processing ? "Подтверждение..." : "Подтвердить"}
              </ConfirmButton>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Delete Confirmation Dialog */}
      <Modal open={deleteDialogOpen} onClick={() => setDeleteDialogOpen(false)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>Удалить номер</ModalTitle>
            <CloseButton onClick={() => setDeleteDialogOpen(false)}>
              <X size={20} />
            </CloseButton>
          </ModalHeader>
          <p style={{ textAlign: "center", margin: "1rem 0" }}>Вы действительно хотите удалить номер телефона?</p>
          <DialogButtons>
            <DialogButton onClick={() => setDeleteDialogOpen(false)}>Удалить</DialogButton>
            <DialogButton variant="primary" onClick={confirmDelete} disabled={processing}>
              {processing ? "Удаление..." : "Отмена"}
            </DialogButton>
          </DialogButtons>
        </ModalContent>
      </Modal>

      {/* Logout Confirmation Dialog */}
      <Modal open={logoutDialogOpen} onClick={() => setLogoutDialogOpen(false)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>Выйти с аккаунта?</ModalTitle>
            <CloseButton onClick={() => setLogoutDialogOpen(false)}>
              <X size={20} />
            </CloseButton>
          </ModalHeader>
          <p style={{ textAlign: "center", margin: "1rem 0" }}>Вы действительно хотите выйти с аккаунта?</p>
          <DialogButtons>
            <DialogButton onClick={() => setLogoutDialogOpen(false)}>Отмена</DialogButton>
            <DialogButton
              variant="primary"
              onClick={() => {
                localStorage.removeItem("user")
                setLogoutDialogOpen(false)
                window.location.reload()
              }}
            >
              Выйти
            </DialogButton>
          </DialogButtons>
        </ModalContent>
      </Modal>
    </Container>
  )
}
