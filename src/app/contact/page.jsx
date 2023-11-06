import ContactDetails from "@/components/contact/ContactDetails";
import PlainLayout from "@/components/master/PlainLayout";

export default function Contact() {
    return (
        <PlainLayout>
            <div className="container mx-auto">
                <ContactDetails />
            </div>
        </PlainLayout>
    );
}
