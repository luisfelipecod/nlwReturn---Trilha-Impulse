import { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideiaImageUrl from "../../assets/ideia.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucceesStep } from "./Steps/FeedbackSucceesStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'imagem de um inseto',
        }
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: ideiaImageUrl,
            alt: 'imagem de uma lâmpada',
        }
    },
    OTHER: {
        title: 'Outros',
        image: {
            source: thoughtImageUrl,
            alt: 'imagem de um balão de pensamento',
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ? (
                <FeedbackSucceesStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) :
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    }
                </>
            )}

            <footer>
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rockeatseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}