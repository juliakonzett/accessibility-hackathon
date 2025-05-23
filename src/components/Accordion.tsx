export default function Accordion() {
    return (
        <div>
            <h2 className="font-medium text-4xl my-8"># FAQ</h2>
            <section className="w-full max-w-xl mx-auto my-10 space-y-4">
                <details className="group border border-gray-300 rounded-lg">
                    <summary className="cursor-pointer select-none p-4 text-lg font-semibold bg-gray-100 group-open:bg-gray-200">
                        Was ist ein Gummiente?
                    </summary>
                    <div className="px-4 pb-4 pt-2 text-gray-700">
                        Eine Gummiente ist ein Bade-Spielzeug in Entenform – meistens gelb, meistens quietschend.
                    </div>
                </details>

                <details className="group border border-gray-300 rounded-lg">
                    <summary className="cursor-pointer select-none p-4 text-lg font-semibold bg-gray-100 group-open:bg-gray-200">
                        Warum lieben Entwickler*innen Gummienten?
                    </summary>
                    <div className="px-4 pb-4 pt-2 text-gray-700">
                        Beim sogenannten "Rubber Duck Debugging" erklärt man der Ente sein Problem – und findet dabei oft selbst die Lösung!
                    </div>
                </details>

                <details className="group border border-gray-300 rounded-lg">
                    <summary className="cursor-pointer select-none p-4 text-lg font-semibold bg-gray-100 group-open:bg-gray-200">
                        Kann ich mehrere Panels gleichzeitig öffnen?
                    </summary>
                    <div className="px-4 pb-4 pt-2 text-gray-700">
                        Ja! Das ist der Standard von &lt;details&gt;. Wenn du ein exklusives Verhalten willst, brauchst du JavaScript.
                    </div>
                </details>
            </section>
        </div>

    );
}
