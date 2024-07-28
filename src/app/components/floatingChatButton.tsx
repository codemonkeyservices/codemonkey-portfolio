import { GrChat } from "react-icons/gr";

export default function FloatingChatButton(){
    return(
        <button
        aria-label="contact floating button"
         className="fixed bottom-4 right-4 h-12 w-12 rounded-full blue-gradient flex justify-center items-center breathing drop-shadow-lg">
          <GrChat className="size-6 text-white" />
        </button>
    )
}