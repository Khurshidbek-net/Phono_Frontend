import React, { useEffect, useState } from "react";
import { SectionWrapper } from "./phoneSection.style";
import { useUserById } from "../../../../hooks";

const PhoneSection = (props: any) => {
  const { formData, setFormData } = props;
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = userData?.id ? Number(userData.id) : null;
  const { data: user, isLoading, error } = useUserById(userId);
  const [selectedPhone, setSelectedPhone] = useState<string | null>(null);

  useEffect(() => {
    if (user?.id) {
      setFormData((prev: any) => ({
        ...prev,
        userId: user.id,
      }));
    }
  }, [user, setFormData]);

  const handlePhoneSelect = (phone: string) => {
    setSelectedPhone(phone);
    setFormData((prev: any) => ({
      ...prev,
      user_phone_number: phone,
    }));
    localStorage.setItem("selectedPhoneNumber", phone);
  };

  if (!userId) {
    return (
      <SectionWrapper>
        <h2>Номер телефона</h2>
        <p>Необходимо войти в систему для выбора номера телефона</p>
      </SectionWrapper>
    );
  }

  if (isLoading) {
    return (
      <SectionWrapper>
        <h2>Номер телефона</h2>
        <p>Загрузка номеров телефона...</p>
      </SectionWrapper>
    );
  }

  if (error) {
    return (
      <SectionWrapper>
        <h2>Номер телефона</h2>
        <p>Ошибка загрузки номеров телефона</p>
      </SectionWrapper>
    );
  }

  if (!user || !user.PhoneNumbers || user.PhoneNumbers.length === 0) {
    return (
      <SectionWrapper>
        <h2>Номер телефона</h2>
        <p>У вас нет сохранённых номеров. Добавьте номер в <a href='/profile'>профиле</a>.</p>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper>
      <h2>Номер телефона</h2>
      {user.PhoneNumbers.map((phone, index) => (
        <label className="label" key={phone.id || index}>
          <input
            type="radio"
            name="phone"
            value={phone.phone}
            checked={selectedPhone === phone.phone}
            onChange={() => handlePhoneSelect(phone.phone)}
          />
          {phone.phone}
        </label>
      ))}
    </SectionWrapper>
  );
};

export default PhoneSection;
