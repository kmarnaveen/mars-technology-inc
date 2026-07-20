import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

type BlogPostParams = Promise<{ slug: string }>;

const blogContent: Record<
  string,
  { title: string; date: string; category: string; content: string[] }
> = {
  "wholesale-pricing-strategy": {
    title: "Price Like a Distributor, Not a Spreadsheet",
    date: "January 15, 2026",
    category: "Business Strategy",
    content: [
      "Most wholesale pricing conversations start in the wrong place: the invoice. The number that should drive your pricing isn't what a unit costs — it's how fast that unit leaves the shelf, and what it costs you every day it doesn't.",
      "Velocity beats margin, almost every time. A handset that turns twelve times a year at eight points of margin makes you more money — and more repeat customers — than one that turns three times at twenty. When you evaluate a buy, put turn rate next to margin on the same line. The best operators in this business price to keep their fast movers fast, and let the slow shelf pay rent or leave.",
      "Tier with intent, not habit. Volume tiers exist to buy loyalty, not to give the bottom of your range away. Set the first tier where a serious buyer naturally lands, make the second tier feel earned, and reserve the top tier for partners who forecast with you. A tier a customer can hit by accident isn't a tier — it's a discount with paperwork.",
      "Respect the empty-shelf tax. A stockout doesn't just cost the sale in front of you; it sends your customer to a competitor's counter, and habits form fast. When you weigh holding a little extra stock against squeezing the last point out of a purchase order, remember that availability is a pricing strategy too — the most underrated one in the industry.",
      "Publish your structure and honor it. Buyers talk to each other more than distributors like to think. A pricing sheet that means what it says — clear tiers, clear terms, no quiet exceptions — compounds into the kind of trust that survives a bad quarter. Opaque pricing wins a deal; transparent pricing wins a decade.",
      "Pricing is a relationship tool wearing a spreadsheet costume. Treat it that way, and the margins tend to take care of themselves.",
    ],
  },
  "asset-liquidation-guide": {
    title: "Liquidation Without the Fire Sale",
    date: "January 10, 2026",
    category: "Asset Management",
    content: [
      "Liquidation has a branding problem. Say the word and everyone pictures a fire sale — pallets going out the door at any price, value evaporating with every hour. It doesn't have to work that way. A disciplined exit routinely recovers far more than a panicked one, and the difference is decided before the first unit sells.",
      "Start with an honest audit. Walk the stock and grade every line by four things: condition, age, current market demand, and realistic resale value — not the value on the books, the value a buyer will actually wire money against this month. This grading decides everything downstream, so resist the urge to be optimistic. Optimism is how liquidations run long.",
      "Match each grade to its channel. Your A-stock — current, sealed, in demand — deserves your normal sales channels and normal margins; don't dump what you could simply sell. B-stock and aging lines are where a bulk wholesale exit earns its keep: one negotiation, one truck, guaranteed revenue, and your team's attention back on the business you're actually running.",
      "Time the market, not your anxiety. Device values move on launch cycles and seasons — a Galaxy pallet is worth measurably more in the weeks before the next flagship drops than the weeks after. If you can choose your window, choose it deliberately. A month of patience often buys back several points of recovery.",
      "Handle the unglamorous details like a professional, because your buyer will. Serial number manifests, condition documentation, data sanitization where it applies, and clean logistics terms are what separate a smooth wire transfer from a renegotiation on the loading dock.",
      "Exiting inventory well is a skill, and like most skills it looks effortless only when someone prepared. Prepare, and liquidation stops being a loss event and becomes what it should be: working capital coming home.",
    ],
  },
  "supply-chain-resilience": {
    title: "Never Explain an Empty Shelf Again",
    date: "January 5, 2026",
    category: "Supply Chain",
    content: [
      "Every retailer has given the speech: the shipment is delayed, the container is stuck, the supplier went quiet. Customers nod politely and buy the phone somewhere else. Supply chain resilience isn't a corporate buzzword — it's the set of unglamorous habits that means you never have to give that speech again.",
      "Habit one: never depend on a single source for anything you can't afford to run out of. Two qualified suppliers for every critical category is the floor, not the ceiling — ideally in different regions, with different failure modes. The second source costs you a little margin in good times and saves your quarter in bad ones.",
      "Habit two: carry honest safety stock. Not aspirational stock, not fear stock — a deliberate buffer on your proven movers, sized against how long your supply actually takes to recover when it breaks. Yes, inventory costs money to hold. So does a dark shelf during launch week, and only one of those costs also damages your reputation.",
      "Habit three: insist on visibility. You should know where your inventory is — on the water, in customs, on a truck — without sending an email and hoping. Distributors who provide real tracking and honest lead times are worth a point or two of price on their own; the information is part of the product.",
      "Habit four: treat your logistics and supply partners like infrastructure, because they are. The partner who answers the phone at 4pm on a Friday, tells you the truth about a delay, and moves your pallet up the queue when it matters — that relationship gets built during the easy months, not the crisis.",
      "None of this is complicated. All of it is work. That's precisely why the retailers who do it stand out — resilience is rare not because it's hard to understand, but because it's easy to postpone.",
    ],
  },
  "mobile-device-trends-2026": {
    title: "What Moves in 2026: The Handset Report",
    date: "December 28, 2025",
    category: "Market Trends",
    content: [
      "Inventory decisions are bets on the future, so here is the future as the numbers currently tell it: flagships holding firm, mid-range eating share, certified pre-owned going fully mainstream, and financing quietly reshaping when — and what — customers buy.",
      "Flagships are proving stubbornly durable. Premium devices keep commanding premium prices because they've become long-horizon purchases — customers hold them longer, finance them more readily, and walk into stores asking for them by name. For wholesale buyers, that means flagship allocation is still the anchor of a healthy mix, especially in the weeks around launch cycles.",
      "The mid-range is where the volume war is being fought. Today's mid-tier device does ninety percent of what a flagship does at half the ticket, and value-conscious buyers have noticed. Retailers who stock the mid-range deep are capturing customers who would have walked out over a flagship price tag — and pocketing surprisingly healthy margin doing it.",
      "Certified pre-owned has crossed from niche to normal. The stigma is gone, the margins are real, and the sustainability story writes its own marketing. The winners in this segment are strict about sourcing: verified, graded, warrantied stock from distributors who stand behind the manifest.",
      "Watch the financing and trade-in machinery. Carrier and retail financing programs pull upgrade demand forward and concentrate it around launch windows, which makes demand spikier than the sell-through averages suggest. Buyers who plan allocation around those windows — rather than smoothing them away in a spreadsheet — consistently catch the wave instead of the wake.",
      "The through-line for 2026: breadth wins. A mix that pairs flagship anchors with a deep mid-range bench and a credible certified pre-owned shelf serves every customer who walks in — and that, more than any single trend, is what moves the number at the end of the year.",
    ],
  },
  "bulk-ordering-best-practices": {
    title: "The Bulk Order, Done Right",
    date: "December 20, 2025",
    category: "Wholesale Tips",
    content: [
      "A great bulk order looks boring from the outside: the right stock, at the right tier, landing at the right time, paid for with money that wasn't needed elsewhere. Behind that boredom sit four disciplines, and skipping any one of them is how volume quietly stops meaning margin.",
      "Discipline one: forecast from evidence, not enthusiasm. Your last two years of sell-through, adjusted for seasonality and launch cycles, is a forecast. A good feeling about a product is not. Over-ordering ties up cash and shelf space; under-ordering hands customers to competitors — and both mistakes trace back to the same root: ordering on instinct when the data was sitting right there.",
      "Discipline two: buy to the tier that pays, not the tier that flatters. Know your distributor's volume breaks cold, and order into the one where the per-unit math genuinely improves your blended margin. Stretching to a higher tier for stock that will sit is not a discount — it's storage with extra steps.",
      "Discipline three: mix the pallet. Concentrating an entire order in one category or one manufacturer is a bet you don't need to make. Spreading across smartphones, audio, tablets, and accessories smooths your risk, serves more of your customers, and — usefully — makes you a more interesting account to your distributor.",
      "Discipline four: make your supplier a teammate. Share your forecasts, flag your promotions, tell them when demand shifts. A distributor who can see your next quarter can hold allocation for you, warn you before shortages, and fight for your pricing internally. The buyers who get the best terms are almost never the ones who negotiated hardest — they're the ones who communicated most.",
      "Do these four things every time and bulk ordering stops being a gamble on volume. It becomes what it was always supposed to be: the cheapest inventory you own.",
    ],
  },
  "certified-devices-importance": {
    title: "Sealed Is the Whole Story",
    date: "December 15, 2025",
    category: "Product Quality",
    content: [
      "Two pallets of the same phone can be entirely different products. One is factory-sealed, serial-verified, warranty-intact. The other is 'new' in the loosest sense of the word. The price difference between them looks like margin — right up until the returns start.",
      "Certification is a bundle of promises you can actually check: the box has never been opened, the device matches its manifest, the serial numbers are clean, and the manufacturer's warranty is real and running. A distributor who certifies stock is taking on verification work so you don't inherit verification risk.",
      "Run the returns math before you chase the cheaper pallet. Every uncertified device that comes back eats the margin of the several that didn't — in restocking labor, in warranty disputes, and in the customer who now tells people your store sold them a dud. A low return rate isn't a vanity metric; it's one of the highest-leverage numbers in your business.",
      "Certification is also your counterfeit firewall. Fake and tampered devices don't enter supply chains through certified channels — they enter through the gray corners where nobody checks manifests. One counterfeit reaching a customer can cost more in reputation than the entire pallet saved in price.",
      "There's an upside beyond defense: sealed, certified stock sells itself. Customers pay more, argue less, and come back sooner when every box they've ever bought from you was exactly what it claimed to be. Trust, once earned, is the cheapest customer acquisition you'll ever run.",
      "The rule is short: if the manifest can't be verified, the discount isn't real. Buy sealed, buy verified, and let your return rate do your marketing.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: BlogPostParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogContent[slug];
  if (!post) return { title: "Not Found" };

  return buildMetadata({
    title: post.title,
    description: post.content[0]?.substring(0, 155) ?? post.title,
    path: `/blog/${slug}`,
    type: "article",
    keywords: [
      "wholesale electronics blog",
      post.category.toLowerCase(),
      post.title.toLowerCase(),
    ],
  });
}

export default async function BlogPost({
  params,
}: {
  params: BlogPostParams;
}) {
  const { slug } = await params;
  const post = blogContent[slug];

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            404
          </p>
          <h1 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl">
            Article not found
          </h1>
          <Link
            href="/blog"
            className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Blog
          </Link>

          <article className="mt-10">
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.3em]">
              <span className="text-primary">{post.category}</span>
              <span className="text-muted-foreground">{post.date}</span>
            </div>
            <h1 className="mt-5 font-display text-3xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>

            <div className="mt-10 border-t-2 border-foreground pt-10">
              <div className="max-w-2xl space-y-6">
                {post.content.map((paragraph, idx) =>
                  idx === 0 ? (
                    <p
                      key={idx}
                      className="text-lg font-light leading-relaxed text-foreground sm:text-xl"
                    >
                      {paragraph}
                    </p>
                  ) : (
                    <p
                      key={idx}
                      className="font-sans text-sm font-light leading-relaxed text-foreground/85 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ),
                )}
              </div>
            </div>

            <div className="mt-12 border-t border-foreground/15 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Read More Articles
              </Link>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  );
}
