"use client";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  const copyToClipBoard = () => {
    // navigator.clipboard.writeText("hello@abudhabiapprovals.ae");
    alert("Email copied to clipboard");
  };

  return (
    <footer className="bg-bgfootercolor text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-wrap space-x-5 align-middle">
            <Image
              className="w-8 h-8 mb-4"
              src="/images/shape-6.png"
              alt="Phone Icon"
              width={20}
              height={20}
            />
            <Link className="text-lg" href="tel:02 627 7880">
              02 627 7880
            </Link>
          </div>
          <div className="flex flex-wrap space-x-2 md:items-start">
            <Image
              className="w-8 h-8 mb-4"
              src="/images/shape-7.png"
              alt="Email Icon"
              width={20}
              height={20}
            />

            <div className="cursor-pointer" onClick={copyToClipBoard}>
              <p className="text-lg">hello@abudhabiapprovals.ae</p>
              <span className="text-sm">Click to copy</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <Link href="#" target="_blank" className="mr-4">
              <Image
                className="w-8 h-8"
                src="/images/1557428419479-shape-8.webp"
                alt="Facebook"
                width={20}
                height={20}
              />
            </Link>
            <Link href="#" target="_blank" className="mr-4">
              <Image
                className="w-8 h-8"
                src="/images/1557428434698-shape-9.webp"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
            <Link href="#" target="_blank" className="mr-4">
              <Image
                className="w-8 h-8"
                src="/images/1557428452019-shape-10.webp"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </Link>
            <Link href="#" target="_blank" className="mr-4">
              <Image
                className="w-8 h-8"
                src="/images/1557428489964-shape-13.webp"
                alt="YouTube"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p>
              Abu Dhabi Approvals,
              <br />
              46th Floor, Office 4607
              <br />
              Addax Tower, Jazeerat Al Reem,
              <br />
              Abu Dhabi, UAE
            </p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14522.456595119545!2d54.4029979!3d24.4988226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33462f6958ccae70!2sAbu%20Dhabi%20Approvals!5e0!3m2!1sen!2sae!4v1638944523159!5m2!1sen!2sae"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Featured Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/abu-dhabi-civil-defence-approval">
                  Abu Dhabi Civil Defence Approval
                </Link>
              </li>
              <li>
                <Link href="/services/auh-malls-approval">
                  AUH Malls Approval
                </Link>
              </li>
              <li>
                <Link href="/services/abu-dhabi-airports-company-approval">
                  Abu Dhabi Airports Company Approval
                </Link>
              </li>
              <li>
                <Link href="/services/permit-and-noc-for-excavation-and-shoring">
                  Permit and NOC for Excavation and Shoring
                </Link>
              </li>
              <li>
                <Link href="/services/abu-dhabi-airport-free-zone-approval">
                  Abu Dhabi Airport Free Zone Approval
                </Link>
              </li>
              <li>
                <Link href="/services/industrial-city-of-abu-dhabi-approval">
                  Industrial City of Abu Dhabi Approval
                </Link>
              </li>
              <li>
                <Link href="/hire-contractor">Hire Contractor</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Recent Post</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/significance-of-abu-dhabi-building-codes-to-aec-industry">
                  Significance of Abu Dhabi Building Codes to AEC Industry
                </Link>
              </li>
              <li>
                <Link href="/blog/addc-water-services-inspection-and-clearance-certificates">
                  ADDC Water Services Inspection and Clearance Certificates
                </Link>
              </li>
              <li>
                <Link href="/blog/addc-standards-on-al-ain-water-distribution-project-design">
                  ADDC Standards On Al Ain Water Distribution Project Design
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-obtain-common-construction-noc-in-abu-dhabi">
                  How to Obtain Common Construction NOC in Abu Dhabi
                </Link>
              </li>
              <li>
                <Link href="/blog/introducing-the-abu-dhabi-construction-city-adcc">
                  Introducing the Abu Dhabi Construction City ADCC
                </Link>
              </li>
              <li>
                <Link href="/blog/10-ways-to-improve-your-abu-dhabi-warehouse-safety">
                  10 Ways To Improve Your Abu Dhabi Warehouse Safety
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
