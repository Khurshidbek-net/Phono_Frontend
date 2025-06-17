import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const Header = styled.div`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  padding: 1rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Logo = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HeaderButton = styled.button`
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
`;

export const AddButton = styled.button`
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
`;

export const MainContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Breadcrumb = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
`;

export const ProfileCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileDetails = styled.div`
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
  }

  p {
    color: #6b7280;
    margin: 0;
  }
`;

export const EditButton = styled.button`
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
`;

export const Tabs = styled.div`
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const Tab = styled.button<{ active?: boolean }>`
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
`;

export const Section = styled.div`
  background: white;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const SectionHeader = styled.button`
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
`;

export const SectionContent = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  padding: 0 1rem 1rem 1rem;
`;

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemText = styled.span`
  color: #374151;
`;

export const ItemSubtext = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`;

export const DeleteButton = styled.button`
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
`;

export const AddItemButton = styled.button`
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
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const RadioItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  margin: 0;
`;

export const ActionButton = styled.button<{ danger?: boolean }>`
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
`;

export const Modal = styled.div<{ open: boolean }>`
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
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  max-width: 400px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ModalTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: #6b7280;

  &:hover {
    color: #374151;
  }
`;

export const Input = styled.input`
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
`;

export const ConfirmButton = styled.button<{ disabled?: boolean }>`
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
`;

export const VerificationGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const VerificationInput = styled.input`
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
`;

export const VerificationText = styled.div`
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
`;

export const DialogButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const DialogButton = styled.button<{ variant?: "primary" | "secondary" }>`
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
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 1.125rem;
`;
