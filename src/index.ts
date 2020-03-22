import { useCallback, useState } from "react"

const CONFIRM_IS_KAGAWA_MESSAGE = "本サービスはゲーム要素を含んでいます。あなたは香川県民ですか？"

export const useConfirmIsKagawa = () => {
    const [isKagawa, setIsKagawa] = useState(false)

    const open = useCallback(() => {
        const answer = window.confirm(CONFIRM_IS_KAGAWA_MESSAGE)
        setIsKagawa(answer)
    }, [])

    return {
        isKagawa,
        open
    }
}

export const useGeographicallyConfirmIsKagawa = () => {
    const [isKagawa, setIsKagawa] = useState(false)

    const ask = useCallback(() => {
        const answer = window.confirm(CONFIRM_IS_KAGAWA_MESSAGE)
        setIsKagawa(answer)
    }, [])

    const open = useCallback(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude
                const lng = position.coords.longitude
                if ((33 <= lat && lat <= 35) || (133 <= lng && lng <= 135)) {
                    ask()
                }
            },
            () => {
                ask()
            }
        )
    }, [ask])

    return {
        isKagawa,
        open
    }
}

export const useStrictConfirmIsKagawa = () => {
    const [isKagawa, setIsKagawa] = useState(false)

    const open = useCallback(() => {
        const answer = window.confirm(CONFIRM_IS_KAGAWA_MESSAGE)
        if (answer) {
            const isUnder18 = window.confirm("18歳未満ですか？")
            if (isUnder18) {
                const isForLearning = window.confirm("学習目的ですか？")
                if (!isForLearning) {
                    setIsKagawa(true)
                } else {
                    const isAlreadyPlayGameToday = window.confirm(
                        "本日は既にゲームをしていますか？また本日このサービス以外にゲームを行わないことを了承しますか？"
                    )
                    if (isAlreadyPlayGameToday) {
                        setIsKagawa(true)
                    } else {
                        window.confirm("一時間のみ本サービスを利用することができます。")
                        window.setTimeout(() => {
                            setIsKagawa(true)
                        }, 60 * 60 * 1000)
                    }
                }
            }
        }
    }, [])

    return {
        isKagawa,
        open
    }
}
