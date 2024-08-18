import { redirect } from "next/navigation";

export default function HomePage() {

    const state = 'yes';

    if (state) {
        return redirect("/about");

    }

    return (
        <div>

        </div>
    )


}