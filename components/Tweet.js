import React from 'react'
import Image from 'next/image'
import timeago from 'lib/timeago'

export default function Tweet({tweet}){

  return (
    <p>{tweet.author.image && (
      <Image src={tweet.author.image} className="rounded-full" alt={tweet.author.name} width="40" height="40" />
    )}{"  "}{timeago.format(new Date(tweet.createdAt))}{'  '}
      {tweet.author.name}{'  '}
      <span style={{fontWeight: "bold"}}>{tweet.content}</span>

      </p>
  )
}
