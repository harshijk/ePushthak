import { useEffect } from "react"

export const useTitle = (title) => {
  useEffect(() => {
    document.title =`ePushthak | ${title}`;

  }, [title])
  
  return null;
}
