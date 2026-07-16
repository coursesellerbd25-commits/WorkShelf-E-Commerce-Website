import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const user = {
  name: 'John Doe',
  email: 'john@example.com',
  companyName: 'Acme Corporation',
  businessType: 'Software Company',
  companyWebsite: 'https://acme.com',
  companyPhone: '+1 555-1234',
};

const ProfilePage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your personal and business information.
          </p>

          {/* Personal Information */}
          <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">
              Personal Information
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-slate-500">
                  Full Name
                </p>

                <p className="mt-1 text-lg font-semibold">
                  {user.name}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Email Address
                </p>

                <p className="mt-1 text-lg font-semibold">
                  {user.email}
                </p>
              </div>

            </div>
          </section>

          {/* Company Information */}
          {user.companyName && (
            <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold">
                Company Information
              </h2>

              <div className="space-y-5">

                <div>
                  <p className="text-sm text-slate-500">
                    Company Name
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    {user.companyName}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Business Type
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    {user.businessType}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Website
                  </p>

                  <a
                    href={user.companyWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-blue-600 hover:underline"
                  >
                    {user.companyWebsite}
                  </a>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Company Phone
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    {user.companyPhone}
                  </p>
                </div>

              </div>
            </section>
          )}

          {/* Actions */}
          <section className="mt-8 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Edit Profile
            </button>

            <button className="rounded-xl border border-red-200 px-6 py-3 font-semibold text-red-600 transition hover:bg-red-50">
              Logout
            </button>

          </section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProfilePage;