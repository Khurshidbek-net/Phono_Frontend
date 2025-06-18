import AdvertisementOne from "../../app/updateAdvertisement";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function AdvertiseIdPage() {
  return (
    <ProtectedRoute>
      <main>
        <AdvertisementOne/>
      </main>
    </ProtectedRoute>
  );
}
