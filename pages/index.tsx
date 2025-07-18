import { signIn, signOut, useSession } from 'next-auth/react'

import {
  Button,
  Layout,
  Link,
  Page,
  Text,
  List,
  Code,
} from '@vercel/examples-ui'

export default function Home() {
  const { data, status } = useSession();
  return (
    <Page>
      <section className="flex flex-col gap-6">
        <Text variant="h1">Epic Sandbox</Text>
      </section>
      <hr className="border-t border-accents-2 my-3" />

      <section className="flex flex-col gap-3">
        {status === 'authenticated' ? (
          <section className="flex flex-col gap-3">
            <List>
              <li>
                <Link href="/Patient.Get">
                  Patient.Read (R4) 
                </Link>
              </li>
              <li>
                <Link href="/Appointment.Search">
                  Appointment.Search (Appointments) (R4) 
                </Link>
              </li>
              <li>
                <Link href="/Appointment.Search.Surgeries">
                  Appointment.Search (Scheduled Surgeries) (R4)
                </Link>
              </li>
              <li>
                <Link href="/Observation.Search">
                  Observation.Search (Labs) (R4)
                </Link>
              </li>
              <li>
                <Link href="/Practitioner.Search">
                  Practitioner.Search (R4)
                </Link>
              </li>
              <li>
                <Link href="/Allergy.Search">
                  Allergy.Search (AllergyIntolerance) (R4)
                </Link>
              </li>
              <li>
                <Link href="/Medication.Search">
                  Medication.Search (MedicationRequest) (R4)
                </Link>
              </li>
            </List>
            <hr className="border-t border-accents-2 my-3" />
            <Text className="text-lg">Welcome {data?.user?.name}!{' '} ({data?.user?.email})</Text>
            
            <Button onClick={() => signOut()}>Sign out</Button>
          </section>
        ) : status === 'loading' ? (
          <section className="text-center">
            <Text>Loading...</Text>
          </section>
        ) : (
          <section className="text-center">  
            <Text className="text-lg my-3">Please login using Epic MyChart credentials. Click <Link target='_blank' href="https://fhir.epic.com/Documentation?docId=testpatients">
                  here   
            </Link> to access Epic MyChart Sandbox test data.</Text>
            <Button size="lg" onClick={() => signIn('epic-mychart')}>
              Sign in with Epic MyChart
            </Button>
          </section>
        )}
      </section>
    </Page>
  )
}

// Home.Layout = Layout
