import { faq } from "#constants";

export const Faq = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="flex justify-center items-center mt-10">
                <div className="bg-white shadow-xl rounded-xl p-8 max-w-4xl w-full">
                    <h2 className="text-2xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
                    <p className="text-md text-gray-500 text-center mt-2">
                        Find answers to common questions about Trading Studio
                    </p>

                    <div className="mt-6 space-y-4">
                        {faq.map((item, index) => (
                            <details key={index} className="border border-gray-300 rounded-md p-4">
                                <summary className="text-lg font-medium text-blue-600 cursor-pointer">{item.question}</summary>
                                <p className="text-gray-700 mt-2 whitespace-pre-line">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};