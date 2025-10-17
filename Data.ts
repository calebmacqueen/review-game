import { Category} from './src/interfaces/category';

export const GameBoard: Category[] = [
    {
        name: 'Doctrine 1',
        questions: [
            { id: '0-0', points: 100, question: 'What is sin?' },
            { id: '0-1', points: 200, question: 'What does it mean when we say that the Bible is authoritative?' },
            { id: '0-2', points: 300, question: 'Who is the head of the church? Why is this distinction important?' },
            { id: '0-3', points: 400, question: 'What is the inspiration of Scripture?' },
            { id: '0-4', points: 500, question: 'What are some attributes of God\'s Goodness (Communicable Attributes)? What do those attributes mean?' },
        ]
    },
    {
        name: 'Doctrine 2',
        questions: [
            { id: '1-0', points: 100, question: 'What is the Trinity?' },
            { id: '1-1', points: 200, question: 'What parts is man composed of?' },
            { id: '1-2', points: 300, question: 'What characteristics must Pastors and Deacons have? How are they different?' },
            { id: '1-3', points: 400, question: 'Explain the gospel.' },
            { id: '1-4', points: 500, question: 'What are some attributes of God\'s Greatness (Incommunicable Attributes)? What do those attributes mean?' },
        ]
    },
    {
        name: 'Secular Counseling',
        questions: [
            { id: '2-0', points: 100, question: 'What does worldly counseling say aboaut man\s problems?' },
            { id: '2-1', points: 200, question: 'What solutions does worldly counseling and philosophy have for man\s problems?' },
            { id: '2-2', points: 300, question: 'What is integrationism as it relates to counseling?' },
            { id: '2-3', points: 400, question: 'What is the problem with the way the world attempts to solve man\'s problems?' },
            { id: '2-4', points: 500, question: 'What four questions does every philosophy model attempt to address?' },
        ]
    },
    {
        name: 'Biblical Counseling & Discipleship',
        questions: [
            { id: '3-0', points: 100, question: 'How does a Biblical worldview define our approach to man\'s problems?' },
            { id: '3-1', points: 200, question: 'What is the solution for man\'s problems?' },
            { id: '3-2', points: 300, question: 'Why do we need to understand where our problems come from?' },
            { id: '3-3', points: 400, question: 'What questions can we ask to determine what someone believes?' },
            { id: '3-4', points: 500, question: 'What does it mean to have a worldview? Why should you think about and define your worldview?' },
        ]
    },
    {
        name: 'Growth and Change',
        questions: [
            { id: '4-0', points: 100, question: 'What is positional justification and who accomplishes that work?' },
            { id: '4-1', points: 200, question: 'What is progressive sanctification and who accomplishes that work?' },
            { id: '4-2', points: 300, question: 'What is the put off / put on principle as it relates to our habits?' },
            { id: '4-3', points: 400, question: 'Why do believers need to be growing in their relationship with God?' },
            { id: '4-4', points: 500, question: 'What tools and / or provisions does God provide to aid us in becoming more Christ-like?' },
        ]
    },
]