import { type } from "os";
import React from "react";

type UseOutsideAlerterProps = {
  ref: refs;
  functToRun: any;
  checkVal: string | object | boolean;
};
type refs = {
  [string: string]: any;
  stepInput: any;
};

export function UseOutsideAlerter(props: UseOutsideAlerterProps) {
  const { ref, functToRun, checkVal } = props;
  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (checkVal) {
          functToRun(!checkVal);
        }
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, checkVal]);
}
