import { AlertTriangle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertConnectWallet() {
  <Alert>
    <AlertTriangle className="h-4 w-4" />
    <AlertTitle>Please Connect Wallet First</AlertTitle>
    <AlertDescription>
      You can add components and dependencies to your app using the cli.
    </AlertDescription>
  </Alert>;
}
