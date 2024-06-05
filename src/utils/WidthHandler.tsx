import { updateWidth } from "@/redux/slice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const WidthHandler = () => {

  const width = useSelector((state: RootState) => state.width.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const widthHandler = () => {
      dispatch(updateWidth(window.innerWidth))
    };
    window.addEventListener("resize", widthHandler);

    return () => {
      window.removeEventListener("resize", widthHandler);
    };
  }, []);
};

export default WidthHandler;
