import React, { useEffect, useState } from "react";
import { SectionWrapper } from "./phoneSection.style";
import { useUserById } from "../../../../hooks";

const PhoneSection = (props: any) => {
  const { formData, setFormData } = props;
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const { data: user } = useUserById(Number(userData.id));
  const [selectedPhone, setSelectedPhone] = useState<string | null>(null);

  useEffect(() => {
    if (user?.id) {
      setFormData(() => ({
        ...formData,
        userId: user.id,
      }));
    }
  }, [user, setFormData]);

  const handlePhoneSelect = (phone: string) => {
    setSelectedPhone(phone);
    setFormData(() => ({
      ...formData,
      user_phone_number: phone,
    }));
  };

  return (
    <SectionWrapper>
      <h2>Номер телефона</h2>
      {user?.PhoneNumbers.map((phone, index) => (
        <label className="label" key={phone.id || index}>
          <input
            type="radio"
            name="phone"
            value={phone.phone}
            checked={selectedPhone === phone.phone}
            onChange={() => handlePhoneSelect(phone.phone)}
          />
          {phone?.phone}
        </label>
      ))}
    </SectionWrapper>
  );
};

export default PhoneSection;
