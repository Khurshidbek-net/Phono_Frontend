import Advertisement from "../../app/advertisement";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function CreateAdvertisePage() {
  return (
    <ProtectedRoute>
      <main>
        <Advertisement/>
      </main>
    </ProtectedRoute>
  );
}
