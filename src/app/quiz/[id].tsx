import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { fetchQuizById } from "../../services/api";

export default function QuizScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [quiz, setQuiz] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (id) fetchQuizById(id as string).then(setQuiz);
  }, [id]);

  if (!quiz) return <Text>Loading...</Text>;

  const currentQ = quiz.questions[current];

  const handleAnswer = (option: string) => {
    if (option === currentQ.answer) setScore(score + 1);
    if (current + 1 < quiz.questions.length) {
      setCurrent(current + 1);
    } else {
      router.push({ pathname: "/quiz/result", params: { score, total: quiz.questions.length } });
    }
  };

  return (
    <View>
      <Text>{currentQ.question}</Text>
      {currentQ.options.map((opt: string, idx: number) => (
        <Button key={idx} title={opt} onPress={() => handleAnswer(opt)} />
      ))}
    </View>
  );
}
