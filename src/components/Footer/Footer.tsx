import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-100">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/Logo.png" alt="TeachAPT" width={120} height={120} />
            {/* <span className="font-bold text-lg text-blue-600">TeachAPT</span> */}
          </div>

          <p className="text-sm text-gray-700 max-w-xs">
            Experience limitless education with TeachAPT’s flexible, accessible, and innovative
            platform.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-bold mb-4 text-black">Useful Links</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Available Courses</Link>
            </li>
            <li>
              <Link href="#">Join a Community</Link>
            </li>
            <li>
              <Link href="#">Blogs</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4 text-black">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>info@teachapt.com</li>
            <li>support@teachapt.com</li>
            <li>Tel: +2347000000000</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="font-semibold mb-3 text-sm text-black">Subscribe to our newsletter</h4>

          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full border rounded-md px-3 py-2 text-sm mb-4"
          />

          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700 transition"
          >
            submit
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-blue-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Of Use</Link>
            <Link href="#">Legal</Link>
          </div>

          <p>All rights reserved</p>

          <div className="flex gap-4">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </footer>
  );
}
