import { toast } from "react-toastify";
import ScheduleListPage from "./pages/schedule/ScheduleListPage";
import { Button } from "@mui/material";

function App() {
  const notify = () => toast.success("Wow so easy!");
  return (
    <div className="text-2xl">
      <ScheduleListPage/>
      <Button variant="contained" color="primary" onClick={notify}>Thông báo</Button>
    </div>
  );
}

export default App;
