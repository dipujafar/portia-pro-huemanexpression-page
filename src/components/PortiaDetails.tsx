import portiaLogo from "@/assets/portia-page/portia-logo.png";
import Image from "next/image";
export function PortiaDetails() {
  return (
    <div className=" rounded-lg ">
      {/* <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Digital All Inclusive Bundle
      </h1> */}
      <Image src={portiaLogo} alt="portia-logo" className="mb-6" />

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="flex items-start gap-2">
          <span className="text-lg">👋</span>
          <span>
            <strong>Welcome, Portia Pro Users!</strong> Thank you for being
            intentional about choosing diverse, inclusive materials to support
            your clients. Your commitment to representation, accessibility, and
            cultural responsiveness makes a lasting impact!
          </span>
        </p>

        <p>
          Empower communication, build routines, and support everyday learning
          with this all-in-one visual card set. Designed for educators,
          therapists, caregivers, and families, this resource includes 209 total
          cards across 12 targeted categories.
        </p>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            What's Included:
          </h2>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Action Cards</strong> – Visuals of individuals
                performing common verbs to support language development and
                motor imitation.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Behavior Cards</strong> – Promote positive behaviors,
                routines, and social expectations.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Community Helper Cards</strong> – Highlight common
                occupations and their roles in the community.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Communication Cards – Kids & Adults</strong> – Depict
                diverse individuals using various modes of communication to
                support expressive and receptive language.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Diversity Cards</strong> – Represent a range of
                ethnicities, abilities, and communication styles to foster
                inclusion and representation.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Emotion Cards</strong> – Support emotional
                identification, expression, and self-awareness.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Preposition Cards</strong> – Teach vocabulary related to
                spatial location and position.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Potty Training Guide</strong> – Step-by-step visual
                supports for toileting routines.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Safety Cards</strong> – Teach appropriate safety
                behaviors across different environments.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Sensory Cards</strong> – Support communication of
                sensory needs and preferences.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Social Story Cards</strong> – Provide visual narratives
                to prepare for routines, transitions, or new experiences.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Sequence Cards</strong> – Support cognitive development
                by teaching order, process, and task completion.
              </span>
            </li>
          </ul>
        </div>

        <div className="pt-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Secure Content Access
          </h2>
          <p>
            When you complete your purchase, you will have access to the
            material in Portia within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
