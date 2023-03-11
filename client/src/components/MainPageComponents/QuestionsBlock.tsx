import 'macro-css';
import Collapsible from '../Collapsible';

function QuestionsBlock() {
    const questions: { question: string, answer: string }[] = [
        {
            question: 'В каком случае вам понадобится наш сервис по созданию резюме?',
            answer: 'Создание идеального резюме - это огромный объем работы. В определенных ситуациях может быть полезно, чтобы ваше резюме было составлено профессиональным сервисом. Если у вас есть напряженная работа, которая отнимает большую часть вашего времени и не дает вам времени на создание своего резюме или же у вас стандартное и устаревшее резюме, то в этих случаях вам дорога к нашему сервису CV-STUD-IO.'
        },
        {
            question: 'Как мы работаем?',
            answer: 'Мы будем действовать следующим образом: Вы можете зарегистрироваться на нашем сайте, или же пройти сразу в конструктор резюме, где необходимо будет заполнить требуемые данные. Затем выбираете понравившийся вам шаблон, скачиваете его, и устраиваитесь на работу мечты!'
        },
        {
            question: 'Могу ли я по-прежнему редактировать свое резюме, когда оно будет завершено?',
            answer: 'Генерация pdf - форматов резюме происходит в динамическом формате, то есть вы можете редактировать данные вашего резюме сколько вашей душе угодно, и столько же раз генерировать и скачивать сам файл.'
        }
    ]

    return (
        <div className='questionsBlock d-flex flex-column align-center'>
            <div className='infoText'>
                <h1>FAQ: Часто задаваемые вопросы</h1>
                <p>Вопросы и ответы на часто задаваемые вопросы &#128269;.</p>
            </div>
            <div className="questions d-flex flex-column align-center justify-between">
                {
                    questions.map(question => (
                        <Collapsible open header={question.question} children={question.answer} />
                    ))
                }
            </div>
        </div>
    );
}

export default QuestionsBlock;
