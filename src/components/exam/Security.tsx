import { AlertCircle } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";

const Security = () => {
  return (
    <div>
      <section className="py-20 ">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Card className=" border-destructive/20 p-8">
            <div className="space-y-6">
              <div className="inline-flex p-4 rounded-xl bg-destructive/20 shadow-[0_0_20px_hsl(var(--destructive)/0.3)]">
                <AlertCircle className="w-8 h-8 text-destructive-glow" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-destructive-glow">
                  Important Assessment Guidelines
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    • Assessments are timed and must be completed in one session
                  </p>
                  <p>
                    • Secure browser mode prevents external tab access during
                    exam
                  </p>
                  <p>
                    • Step 1 failure (score &lt;25%) prevents retaking - choose
                    wisely
                  </p>
                  <p>• Live monitoring may be active during assessment</p>
                  <p>
                    • Questions are randomized from competency-specific pools
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Security;
