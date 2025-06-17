import styled from "styled-components"

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

export const Breadcrumb = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px;
  color: #666;
  font-size: 14px;
`

export const ProfileSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const UserName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #333;
`

export const UserStats = styled.div`
  color: #666;
  font-size: 14px;
`

export const EditButton = styled.button`
  background: none;
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  color: #666;
  transition: all 0.2s;

  &:hover {
    border-color: #6c5ce7;
    color: #6c5ce7;
  }
`

export const TabsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  gap: 32px;
  border-bottom: 1px solid #eee;
`

export const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: 16px 0;
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => (props.active ? "#6c5ce7" : "#666")};
  border-bottom: 2px solid ${(props) => (props.active ? "#6c5ce7" : "transparent")};
  transition: all 0.2s;

  &:hover {
    color: #6c5ce7;
  }
`

export const SearchContainer = styled.div`
  max-width: 1200px;
  margin: 24px auto;
  padding: 0 20px;
  display: flex;
  gap: 12px;
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #6c5ce7;
  }

  &::placeholder {
    color: #999;
  }
`

export const SearchButton = styled.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5a4fcf;
  }
`

export const ProductGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`

export const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  .new-badge {
    position: absolute;
    top: 8px;
    left: 8px;
    background-color: #00b894;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    z-index: 2;
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const HeartIcon = styled.button<{ active: boolean }>`
  position: absolute;
  top: 8px;
  right: 8px;
  background: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    color: ${(props) => (props.active ? "#ff4757" : "#666")};
  }
`

export const ProductInfo = styled.div`
  padding: 16px;
`

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;

  div {
    font-size: 14px;
    color: #666;
  }
`

export const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #6c5ce7;
`
