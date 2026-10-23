export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'code'; lang: 'typescript' | 'csharp' | 'bash'; code: string }

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: 'Engineering' | 'Cloud' | 'iGaming' | 'Product'
  image: string
  imageAlt: string
  date: string
  blocks: Block[]
}

export const categories = ['All', 'Engineering', 'Cloud', 'iGaming', 'Product'] as const

export const posts: Post[] = [
  {
    slug: 'rebuilding-an-rd-tax-platform',
    title: 'Rebuilding an R&D tax platform on NestJS and ECS',
    excerpt:
      'Users were stuck on a slow no-code tool. I planned the NestJS rebuild, put it on ECS, and turned U.S. R&D credit rules into software the team could change.',
    category: 'Engineering',
    image: '/images/taxrobot.png',
    imageAlt: 'TaxRobot sign-in and an R&D study screen with credit progress and active projects.',
    date: '2026-08-18',
    blocks: [
      {
        type: 'p',
        text: 'When I joined the platform, the product people were using could barely get through a study. It was a no-code stack, slow to change, and a poor fit for the documents a U.S. R&D tax credit depends on. My scope was the backend, the database, and the infrastructure. The new screens came from Figma.',
      },
      {
        type: 'p',
        text: 'The rebuild had a short window. I learned the official forms and the credit rules on the job, then put that knowledge into the system. A wiki that nobody opens during a calculation does not help the next study.',
      },
      { type: 'h2', text: 'A small set of boundaries' },
      {
        type: 'p',
        text: 'I split the API by the work a study actually does: companies, projects, documents, questionnaires, and the credit estimate. Each NestJS module owns its controller, its service, and the policy object that answers domain questions. The schema follows those same boundaries, so a change to questionnaires does not become a drive-by edit of the credit path.',
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `@Module({
  imports: [DatabaseModule, DocumentsModule],
  controllers: [StudiesController],
  providers: [StudiesService, CreditPolicy],
})
export class StudiesModule {}`,
      },
      { type: 'h2', text: 'Scaling as a decision, not a diagram' },
      {
        type: 'p',
        text: 'Early on I wrote a scaling plan the company adopted for the whole environment: ECS clusters, so the API can grow and shrink with load instead of sitting on one always-on box. Docker images, health checks, and a boring deploy path mattered more than a clever network drawing. Users had the MVP of that rebuild in eight months.',
      },
      { type: 'h2', text: 'Where AI belongs' },
      {
        type: 'p',
        text: 'The product uses AI where it saves a person from a blank page: reading source material, drafting notes, pointing at missing evidence. The credit figure still comes from rules we can explain. If a number cannot be traced to a project, a wage, or a document, it does not ship.',
      },
      {
        type: 'ul',
        items: [
          'Encode a rule in one place and test it with figures from a real study, with the names removed.',
          'Prefer a short migration with a boring cutover over a long rewrite nobody is allowed to turn on.',
          'Read the form before naming the table. The schema should look like the work.',
        ],
      },
      {
        type: 'p',
        text: 'That is the version I would run again: a narrow domain model, infrastructure the company can operate, and enough of the domain in the code that the next engineer does not start from a PDF.',
      },
    ],
  },
  {
    slug: 'drink-sharing-campaign',
    title: 'Shipping a global drink-sharing campaign without a production incident',
    excerpt:
      'A new web app had to be about 90% more efficient than the first version, then carry a three-month campaign. The same services also moved from AWS to Azure while dispensers stayed online.',
    category: 'Cloud',
    image: '/images/dispenser-2.png',
    imageAlt: 'Hand holding a phone in front of a dispenser that is getting ready to share a personalized drink.',
    date: '2025-11-18',
    blocks: [
      {
        type: 'p',
        text: 'The dispensers were already in the field, in Europe and in the United States. A person composed a drink on the phone, shared it with someone, and picked it up at the machine. The team kept that platform running and replaced the parts that would not survive a global campaign.',
      },
      {
        type: 'p',
        text: 'The first web app was too slow for a three-month push. The version we shipped was about 90% more efficient on the path that mattered, and the campaign finished with no bugs reported in production.',
      },
      { type: 'h2', text: 'Filling the frontend gap' },
      {
        type: 'p',
        text: 'I am a backend engineer. During a staffing gap I took the Next.js app, followed the Figma frames, and shipped it. The useful part was the contract between the screen and the API. The dispenser flow, the share code, and the campaign rules had to stay in agreement.',
      },
      { type: 'h2', text: 'AWS to Azure, with machines already on' },
      {
        type: 'p',
        text: 'A client policy moved the team from AWS to Azure: ECS, Lambda, S3, DynamoDB, API Gateway, and CloudWatch on the way out. The dispensers could not wait for a freeze. We stood the new path up, watched the ready check, and then shifted traffic. Machines were on Azure with no production bugs reported from the move.',
      },
      {
        type: 'code',
        lang: 'bash',
        code: `# Shift traffic only after the new origin is actually ready.
curl -fsS "$NEW_ORIGIN/ready"`,
      },
      { type: 'h2', text: 'A separate AI tool' },
      {
        type: 'p',
        text: 'Alongside the dispenser work I led an internal application that uses generative AI to take repetitive steps out of a business process. Different codebase, same habit: a small interface, logs you can read, and a way to ship a hotfix the same day.',
      },
      {
        type: 'ul',
        items: [
          'Measure the slow request before rewriting it. The 90% figure is a comparison with the first app.',
          'A cloud migration is done when the old path is idle and the new path has already served real machines.',
          'Unit tests around the campaign rules mattered on the afternoon a hotfix had to go out.',
        ],
      },
    ],
  },
  {
    slug: 'playcheck-round-history',
    title: 'PlayCheck: a round history operators can open',
    excerpt:
      'The studio could store a spin and still fail a compliance question. PlayCheck reads the round from the server and draws it, so a reviewer sees the game instead of a row of numbers.',
    category: 'iGaming',
    image: '/images/ino-session.jpg',
    imageAlt: 'Diego Aprigio reviewing a slot game on a laptop.',
    date: '2024-06-04',
    blocks: [
      {
        type: 'p',
        text: 'I joined INO Games as the first backend engineer. The studio shipped slot games to a global audience, and the math was written with mathematicians in the United States and Hungary. The job was to turn that math into C# that paid what the model said it should pay, and to leave a backend that more than one person could work in.',
      },
      {
        type: 'p',
        text: 'We launched more than eight games with consistent math. A second gap was compliance. The studio could store a round and still not show it. An operator asking what the player saw should not need a developer reading a table out loud.',
      },
      { type: 'h2', text: 'Render the round, do not retell it' },
      {
        type: 'p',
        text: 'PlayCheck reads the round from the server and renders it with C#, Handlebars, HTML, and CSS. The template is the picture of the game. The server remains the source of the stake, the result, and the win. If the drawing and the settlement disagree, the drawing is the one that is wrong.',
      },
      {
        type: 'code',
        lang: 'csharp',
        code: `public sealed record RoundView(string RoundId, decimal Stake, decimal Win);

public string Render(RoundView round, string template)
{
    var html = Handlebars.Compile(template);
    return html(round);
}`,
      },
      { type: 'h2', text: 'Standards before speed' },
      {
        type: 'p',
        text: 'Being first on the backend meant the next engineer would inherit whatever I improvised. I pushed ordinary .NET habits: a Web API shape, a shared game framework with fewer surprises, Git, PostgreSQL, Docker, and a Postman path a new teammate could run. Game work got faster after the framework got duller.',
      },
      {
        type: 'p',
        text: 'The titles I contributed to are listed in the projects section of this site. The part that has to hold on each of them is the same: the math on the server matches the model, and a round can be opened later and understood.',
      },
    ],
  },
  {
    slug: 'one-screen-for-a-device-fleet',
    title: 'The week a device fleet became one screen',
    excerpt:
      'IT asset data was already in the databases. Customers still could not see the fleet. The SaaS view changed that, and the job changed with it, from API tickets to technical lead.',
    category: 'Product',
    image: '/images/itam.png',
    imageAlt: 'Laptop showing an IT asset dashboard with fleet totals, memory bands, and departments.',
    date: '2024-01-16',
    blocks: [
      {
        type: 'p',
        text: 'The IT asset product already had the hard part that spreadsheets pretend to solve: devices, software, contracts, and a lot of rows in SQL, DB2, and PostgreSQL. Customers in Latin America still could not answer a simple question in a meeting. How many machines do we have, and which ones should we touch first?',
      },
      {
        type: 'p',
        text: 'The SaaS view put that answer on one hardware home. Totals, form factor, memory bands, the year a machine was activated, processor mix, department, manufacturer. Visibility and management of customer devices went up by more than 90%, because the data was finally something an operator could act on. Device performance and the day-to-day experience improved by about 80% once those signals were used to cut downtime, not only to fill a report.',
      },
      { type: 'h2', text: 'From endpoints to a release train' },
      {
        type: 'p',
        text: 'I started on the APIs: Node.js, TypeScript, SQL, DB2, and screens built from Figma. Later I led the developers. The work with the CTO and the engineering manager was concrete. What ships this fortnight, what is still a guess, and what does not get squeezed into the branch. A biweekly release only helped because each one was small enough to finish.',
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `type FleetSnapshot = {
  totalAssets: number
  byType: Record<'notebook' | 'desktop' | 'server' | 'mobile', number>
}

export function shareOfFleet(
  snapshot: FleetSnapshot,
  type: keyof FleetSnapshot['byType'],
) {
  if (snapshot.totalAssets === 0) return 0
  return snapshot.byType[type] / snapshot.totalAssets
}`,
      },
      {
        type: 'p',
        text: 'A fleet number is useful only if someone can find the machine behind it. The screen was the feature. The integrations underneath it were the job.',
      },
    ],
  },
]

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`))
}

export function readingTime(post: Post): number {
  const words = post.blocks.reduce((count, block) => {
    if (block.type === 'code') return count
    if (block.type === 'ul') return count + block.items.join(' ').split(/\s+/).length
    return count + block.text.split(/\s+/).length
  }, 0)
  return Math.max(1, Math.round(words / 220))
}
