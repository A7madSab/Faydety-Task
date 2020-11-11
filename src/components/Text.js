import DictionaryList from "../language/Dictionary"
import useSettings from "../hooks/useSettings"

const Text = ({ tid }) => {
    const { settings } = useSettings()
    return DictionaryList[settings.language][tid] || tid
}

export default Text