import Tweet from 'components/Tweet'

export default function Tweets({tweets}) {
  if(!tweets) return null

  return (
    <>
        {tweets.map(tweet => (
            <Tweet key={tweet.id} tweet={tweet} />
        ))}
    </>
  )
}