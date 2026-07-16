import { useState } from 'react';

export default function RegistrationPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState<
        'personal' | 'business'
    >('personal');
    const [companyName, setCompanyName] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [companyPhone, setCompanyPhone] = useState('');

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

    const userData = {
        name,
        email,
        password,

        companyName:
            accountType === 'business'
                ? companyName
                : '',

        businessType:
            accountType === 'business'
                ? businessType
                : '',

        companyWebsite:
            accountType === 'business'
                ? companyWebsite
                : '',

        companyPhone:
            accountType === 'business'
                ? companyPhone
                : '',
    };

    console.log(userData);

  // later:
  // await fetch('/api/auth/register', {
  //   method: 'POST',
  //   headers:{
  //      'Content-Type':'application/json'
  //   },
  //   body: JSON.stringify(userData)
  // });
};

  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <form onSubmit={handleSubmit} className="mb-6">
        <label className="mb-3 block font-medium">
          Account Type
        </label>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setAccountType('personal')}
            className={`rounded-xl border px-5 py-3 transition ${
              accountType === 'personal'
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'bg-white'
            }`}
          >
            Personal Account
          </button>

          <button
            type="button"
            onClick={() => setAccountType('business')}
            className={`rounded-xl border px-5 py-3 transition ${
              accountType === 'business'
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'bg-white'
            }`}
          >
            Business Account
          </button>
        </div>
        <div>
            <label className="mb-2 block font-medium">
                Name
            </label>

            <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full rounded-xl border p-3"
            />
        </div>


        <div>
            <label className="mb-2 block font-medium">
                Email
            </label>

            <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full rounded-xl border p-3"
            />
        </div>

        <div>
            <label className="mb-2 block font-medium">
                Password
            </label>

            <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full rounded-xl border p-3"
            />
        </div>
        {accountType === 'business' && (
            <div className="mt-8 space-y-5">

            <div>
                <label className="mb-2 block font-medium">
                    Company Name
                </label>

                <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="WorkShelf Ltd."
                    className="w-full rounded-xl border p-3 outline-none focus:border-blue-600"
                />
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Business Type
                </label>

                <input
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="Software Company"
                    className="w-full rounded-xl border p-3 outline-none focus:border-blue-600"
                />
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Company Website
                </label>

                <input
                    type="url"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    placeholder="https://workshelf.com"
                    className="w-full rounded-xl border p-3 outline-none focus:border-blue-600"
                />
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Company Phone
                </label>

                <input
                    type="tel"
                    value={companyPhone}
                    onChange={(e) => setCompanyPhone(e.target.value)}
                    placeholder="+88017XXXXXXXX"
                    className="w-full rounded-xl border p-3 outline-none focus:border-blue-600"
                />
            </div>

        </div>
        )}
        <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
        >
            Create Account
        </button>
      </form>
    </main>
  );
}