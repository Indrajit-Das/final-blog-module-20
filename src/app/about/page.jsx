import { ManagementTimeline } from "@/components/about/ManagementTimeline";
import PlainLayout from "@/components/master/PlainLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
    const prisma = new PrismaClient();
    let allManagie = prisma.managements.findMany();
    return allManagie;
}

export default async function About() {
    const data = await getData();
    return (
        <PlainLayout>
            <div className="container mx-auto px-6 md:lg:px-0">
                <section>
                    <div>
                        <p className=" text-justify">
                            Dream Angels Centre for Autistic Children (DACAC) is
                            a specialized centre for physically and mentally
                            challenged children between the ages of 2- 8 years
                            especially with symptoms of AUTISM. DACAC is run and
                            managed by professional speech therapists,
                            occupational therapists, physiotherapists and
                            special educators ably supported by caregivers and
                            administrative staff.
                        </p>
                    </div>
                    <div>
                        <h3 className="py-4 text-lg font-medium underline">
                            History:
                        </h3>
                        <p className="text-justify">
                            Realizing the lack of proper educational
                            institutions/ facilities for children with Autism,
                            couple of qualified Occupational Therapists ventured
                            to set up the school under the name and style of”
                            Dream Angels School “ in March, 2011 in rented
                            premises in Mirpur. Starting with a handful of
                            pupils this school now has 31 students running on a
                            two shift basis with a combined teaching staff of 6
                            who are adequately trained to handle such students.
                            The minimum educational levels of the
                            teachers/instructors are either a Bachelors degree
                            or a Masters degree and possessing special training
                            for handling the students with this condition.
                        </p>
                        <p className="pt-5 text-justify">
                            Considering the limitations of the existing
                            facilities to service the students adequately and in
                            a true professional manner the school was given a
                            Corporate structure whereby the school became a Unit
                            of Dream Angels Limited, a limited liability company
                            registered under the Companies ACT, 1994 obtaining
                            its certificate of incorporation bearing Number
                            C-100516/ 12 dated 29th March, 2012 issued by the
                            Registrar of Joint Stock Companies & Firms,
                            Bangladesh. Both the Founders of the school became
                            the members of the Board of Directors along with the
                            remaining three who came from various
                            backgrounds-the Chairman being a Chartered
                            Accountant from the Institute of England & Wales, UK
                            having a wide range of experience in various
                            capacities both nationally and internationally. With
                            this Corporate structure in place the institution
                            will have the flexibility and resources to expand in
                            an organized manner and will be well placed to
                            better serve the community within Mirpur and the
                            adjoining areas.
                        </p>
                    </div>
                    <div>
                        <h3 className="py-4 text-lg font-medium underline">
                            Mission:
                        </h3>
                        <p className="text-justify">
                            Dream Angels Center for Autistic Children (a Unit of
                            Dream Angels Limited), the Founders being inspired
                            by the ideals of service towards a segment of
                            society who were deprived of certain physical
                            abilities/attributes since birth and guided by the
                            skills, knowledge and experiences gained from
                            reputable institution in this field, decided to
                            dedicate themselves to the cause of improving the
                            lot of the aforesaid segment of the society. In this
                            mission and goal they were supported by some
                            segments of society whose mission was to develop
                            this nascent initiative by the Founders and take it
                            to bigger heights and enlarge their sphere of
                            activities by providing all kinds of support so that
                            the Institution gets both National and International
                            recognition.
                        </p>
                    </div>
                    <div>
                        <h3 className="py-4 text-lg font-medium underline">
                            Vision:
                        </h3>
                        <p className="text-justify">
                            To materialize the Mission stated above Dream Angels
                            Center for Autistic Children envisions partnering
                            with similar types of institutions globally
                            actualizing the physical and mental formation of the
                            students to a level that will establish them in line
                            with other normal students and effecting a social
                            transformation in the country.
                        </p>
                    </div>
                </section>
                <div className=" grid md:lg:grid-flow-col grid-cols-1 md:lg:grid-cols-2 gap-10 py-14">
                    <div>
                        <h2 className=" text-2xl text-indigo-600 font-semibold pb-5">
                            Our Managing Team
                        </h2>
                        <ManagementTimeline members={data} />
                    </div>
                    <div>
                        <h3>Teachers / Caregivers :</h3>
                        <ul>
                            <li>Occupational Therapists (02)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </PlainLayout>
    );
}
