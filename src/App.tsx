/* eslint-disable no-constant-binary-expression */
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

  const openUploadPage = () => {
    // Use chrome.runtime.getURL to convert a relative path to a full extension URL
    const uploadPageUrl = chrome.runtime.getURL("upload.html");

    // Open in a new tab
    chrome.tabs.create({ url: uploadPageUrl });
  };

  return (
    <>
      <button onClick={openUploadPage}>Upload user data</button>
      <div className="card">{false && <UserForm />}</div>
    </>
  );
}

export default App;
