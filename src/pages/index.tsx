import { SortBar } from "@/components/common/SortBar";
import { MainLayout } from "@/components/layouts/Main";
import Films from "@/components/templates/Films/index";
import { useEffect, useState } from "react";

const App = () => {
  const [select, setSelect] = useState<string>('')
    const [variant, setVariant] = useState<string>('')

    useEffect(() => {
        setSelect(localStorage.getItem(`select`) || '')
    }, [])
  return (
    <MainLayout>
      {/* <Films /> */}
      <SortBar variant={variant} setVariant={setVariant} />
      <Films genre={select} variant={variant} />
    </MainLayout>
  );
};

export default App;
