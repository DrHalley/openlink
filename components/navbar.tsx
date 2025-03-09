import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { auth, signIn } from "@/auth";
import Profile from "./profile";

export default async function Navbar() {
  const session = await auth();

  return (
    <Card className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl flex justify-between items-center px-6 py-4 shadow-md bg-white border border-gray-200 rounded-xl">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-900">🚀 OpenLink</div>

      {/* Menü Linkleri */}

      {/* Butonlar */}
      <div>
        {session ? (
          // Kullanıcı giriş yaptıysa Çıkış Butonu
          //   <form
          //     action={async () => {
          //       "use server";
          //       await signOut();
          //     }}
          //   >
          //     <Button type="submit" variant="outline">
          //       Çıkış Yap
          //     </Button>
          //   </form>
          <Profile session={session} />
        ) : (
          // Kullanıcı giriş yapmadıysa Giriş Butonu
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <Button type="submit">GSignin with Github</Button>
          </form>
        )}
      </div>
    </Card>
  );
}
