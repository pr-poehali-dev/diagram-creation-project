import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeTab, setActiveTab] = useState('usecase');

  const diagrams = {
    usecase: {
      title: 'Диаграмма прецедентов',
      description: 'Отображает взаимодействие актёров (Гость, Пользователь, Администратор) с функциями системы регистрации',
      image: 'https://cdn.poehali.dev/projects/25e5c9e2-7b07-4059-bfd8-c88483954470/files/b0e06022-8665-4197-92d7-2e81867a7e89.jpg',
    },
    sequence: {
      title: 'Диаграмма последовательностей',
      description: 'Показывает последовательность сообщений между компонентами при регистрации нового пользователя',
      image: 'https://cdn.poehali.dev/projects/25e5c9e2-7b07-4059-bfd8-c88483954470/files/ffbb1dec-34e2-44b9-8167-9250514d6687.jpg',
    },
    activity: {
      title: 'Диаграмма деятельности',
      description: 'Демонстрирует последовательность действий и решений в процессе регистрации с разделением на зоны ответственности',
      image: 'https://cdn.poehali.dev/projects/25e5c9e2-7b07-4059-bfd8-c88483954470/files/ce1b3ab8-9720-4345-afca-58742b66a456.jpg',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            UML Диаграммы
          </h1>
          <p className="text-lg text-slate-600">
            Вариант 17: Процесс регистрации нового пользователя
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Образовательная платформа для курсов и обучения
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="usecase">Прецеденты</TabsTrigger>
            <TabsTrigger value="sequence">Последовательность</TabsTrigger>
            <TabsTrigger value="activity">Деятельность</TabsTrigger>
          </TabsList>

          {Object.entries(diagrams).map(([key, diagram]) => (
            <TabsContent key={key} value={key}>
              <Card className="border-2 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">{diagram.title}</CardTitle>
                  <CardDescription className="text-base">
                    {diagram.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-white rounded-lg p-4 shadow-inner">
                    <img
                      src={diagram.image}
                      alt={diagram.title}
                      className="w-full h-auto rounded"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-8 text-center">
          <Card className="bg-slate-800 text-white">
            <CardContent className="pt-6">
              <p className="text-sm">
                Все диаграммы выполнены по стандарту UML 2.5 и описывают процесс регистрации пользователя 
                в образовательной системе
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;