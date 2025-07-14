import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import isms from '../../../../assets/questions/isms.json';
import qms from '../../../../assets/questions/qms.json';
import policies from '../../../../assets/questions/policies.json';
import saas from '../../../../assets/questions/saas.json';

// Define the shape of each question
type Question = {
  question: string;
  options: string[];
  answer: string;
};

export default function QuizSection() {
  const { section } = useLocalSearchParams<{ section?: string }>(); // Safely typed
  const router = useRouter();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selected, setSelected] = useState<string | null>(null);

  const questionBank: Record<string, any[]> = {
  isms,
  qms,
  policies,
  saas,
};

//   useEffect(() => {
//     const loadQuestions = async () => {
//       if (!section) return;
//       try {
//         const file = await import(`../../../assets/questions/${section}.json`);
//         setQuestions(file.default);
//       } catch (error) {
//         console.error(`Error loading questions for section "${section}":`, error);
//       }
//     };

//     loadQuestions();
//   }, [section]);
useEffect(() => {
  if (section && questionBank[section]) {
    setQuestions(questionBank[section]);
  } else {
    console.warn('Invalid section name:', section);
  }
}, [section]);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
    setSelected(null);

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      router.push({
        pathname: '/quiz/result',
        params: {
          score: score.toString(),
          total: questions.length.toString(),
        },
      });
    }
  };

  if (!section || !questions.length) {
    return <Text style={styles.text}>Loading...</Text>;
  }

  const q = questions[current];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{section.toUpperCase()} Quiz</Text>
      <Text style={styles.counter}>
        Question {current + 1} of {questions.length}
      </Text>

      <Text style={styles.question}>{q.question}</Text>

      {q.options.map((option, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={() => setSelected(option)}
          style={[
            styles.option,
            selected === option && { backgroundColor: '#ffa726' },
          ]}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        disabled={selected === null}
        style={[styles.nextBtn, { opacity: selected ? 1 : 0.5 }]}
        onPress={handleNext}
      >
        <Text style={styles.nextText}>
          {current + 1 === questions.length ? 'Submit' : 'Next'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0a0a0a',
    flexGrow: 1,
    padding: 20,
  },
  title: {
    color: 'orange',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  counter: {
    color: 'gray',
    marginBottom: 10,
    textAlign: 'center',
  },
  question: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 20,
  },
  option: {
    backgroundColor: '#1a1a1a',
    padding: 14,
    borderRadius: 8,
    marginVertical: 6,
    borderColor: '#333',
    borderWidth: 1,
  },
  optionText: {
    color: '#ccc',
    fontSize: 16,
  },
  nextBtn: {
    marginTop: 20,
    backgroundColor: 'orange',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
  },
});
