import { InstagramIcon, TwitterIcon, LinkedinIcon, FacebookIcon, HeartIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="w-full bg-gray-900 text-white py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text ">
              Kamran Ali
            </h4>
            <p className="text-gray-400 mb-6 max-w-md">
            Empower your creativity and bring your VR app ideas to life with our
             intuitive development tools. Get started today and turn your imagination
             into immersive reality!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full text-gray-400 hover:text-white transition-colors">
                <InstagramIcon size={18} className="" />
              </a>
              <a href="#" className="p-2 rounded-full text-gray-400 hover:text-white transition-colors">
                <TwitterIcon size={18} className="" />
              </a>
              <a href="#" className="p-2 rounded-full text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon size={18} className="" />
              </a>
              <a href="#" className="p-2 rounded-full text-gray-400 hover:text-white transition-colors">
                <FacebookIcon size={18} className="" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-gray-300">
              Quick Links
            </h5>
            <ul className="space-y-2">
              {['About', 'Projects', 'Testimonials', 'Contact','Skills'].map(item => <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                      {item}
                    </a>
                  </li>)}
            </ul>
          </div>
          {/* Companies */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-gray-300">
              Work At
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/company/binaryhubtech/posts/?feedView=all" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Binary Hub
                </a>
              </li>
              <li>
                <a href="https://ideometrix.com/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Ideomatrix
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/t-techpvtltd/posts/?feedView=all" className="text-gray-400 hover:text-purple-400 transition-colors">
                  t.tech
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="text-lg font-semibold mb-4 text-gray-300">
                Contact
              </h5>
              <p className="text-gray-400">kamranaelikakakhail@gmail.com</p>
              <p className="text-gray-400">+92 3554302895</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Kamran Aly. Made with
            <HeartIcon size={16} className="text-red-500" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;