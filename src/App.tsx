import "vditor/dist/index.css";
import React from "react";
import Vditor from "vditor";

const App = () => {
  const [vd, setVd] = React.useState<Vditor>();
  React.useEffect(() => {
    const vditor = new Vditor("vditor", {
      after: () => {
        vditor.setValue("`Vditor` 最小代码示例");
        setVd(vditor);
      }
    });
    console.log(vditor);
  }, []);
  return <div id="vditor" className="vditor" />;
};

export default App;
