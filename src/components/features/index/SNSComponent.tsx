'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

type Color = 'Happy' | 'Healing' | 'Amusing' | 'Negative'

interface Letter {
  id: string
  username: string
  content: string
  color: Color
}

const colorMap: Record<Color, string> = {
  Happy: 'bg-fuchsia-500',
  Healing: 'bg-cyan-500',
  Amusing: 'bg-yellow-500',
  Negative: 'bg-gray-500'
}

const mockLetters: Letter[] = [
  { id: '1', username: 'user1', content: 'This is a happy letter!', color: 'Happy' },
  { id: '2', username: 'user2', content: 'Feeling healed after a long day.', color: 'Healing' },
  { id: '3', username: 'user3', content: 'Just heard the funniest joke!', color: 'Amusing' },
  { id: '4', username: 'user4', content: 'Today was not a good day...', color: 'Negative' },
  { id: '5', username: 'user5', content: 'Excited about the weekend!', color: 'Happy' },
];

export default function SNSMainComponent() {
  const [letters, setLetters] = useState<Letter[]>(mockLetters);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    // モックデータを使用するため、初期化時の処理は不要になりました
  }, []);

  const fetchNextLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % letters.length);
    setIsReading(false);
  };

  const handleReadLetter = () => setIsReading(true)

  const handleSkipLetter = () => {
    fetchNextLetter();
  };

  const handleColorSelect = (color: Color) => {
    console.log(`Selected color: ${color}`);
    fetchNextLetter();
  };


  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-900 text-white p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-white">SNS Feed</CardTitle>
        </CardHeader>
        <CardContent>
          {letters[currentLetterIndex] && (
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${colorMap[letters[currentLetterIndex].color]}`}>
                <p className="font-semibold">{letters[currentLetterIndex].username}</p>
                {isReading && (
                  <p className="mt-2">{letters[currentLetterIndex].content}</p>
                )}
              </div>
              {!isReading ? (
                <div className="flex justify-between">
                  <Button onClick={handleReadLetter} variant="outline">Read</Button>
                  <Button onClick={handleSkipLetter} variant="outline">Skip</Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(colorMap).map((color) => (
                    <Button
                      key={color}
                      onClick={() => handleColorSelect(color as Color)}
                      className={`${colorMap[color as Color]} text-white`}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}