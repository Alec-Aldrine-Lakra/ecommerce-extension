import "./App.css";
import UserForm from "@components/user-form";
function App() {
  // const [color, setColor] = useState<string>();
  // const onClick = async () => {
  //   const [tab] = await chrome.tabs.query({ active: true });
  //   if (tab) {
  //     chrome.scripting.executeScript({
  //       target: { tabId: tab.id as number },
  //       args: [color],
  //       func: (color) => {
  //         document.body.style.backgroundColor = color ?? "red";
  //       },
  //     });
  //   }
  // };

  return (
    <>
      <div className="card">
        <UserForm />
      </div>
    </>
  );
}

export default App;
