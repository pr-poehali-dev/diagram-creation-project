import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeTab, setActiveTab] = useState('usecase');

  const diagrams = {
    usecase: {
      title: 'Диаграмма прецедентов',
      description: 'Отображает взаимодействие актёров с функциями системы регистрации нового пользователя',
      image: 'https://cdn.poehali.dev/projects/25e5c9e2-7b07-4059-bfd8-c88483954470/files/cc925796-aa9e-4e14-ad6f-8821960f63c2.jpg',
    },
    sequence: {
      title: 'Диаграмма последовательностей',
      description: 'Показывает последовательность взаимодействий компонентов системы при регистрации',
      image: 'https://cdn.poehali.dev/projects/25e5c9e2-7b07-4059-bfd8-c88483954470/files/3d6d0695-d8af-4054-8f2c-1093838c3d3a.jpg',
    },
    activity: {
      title: 'Диаграмма деятельности',
      description: 'Демонстрирует пошаговый процесс регистрации с точками принятия решений',
      image: 'https://cdn.poehali.dev/projects/25e5c9e2-7b07-4059-bfd8-c88483954470/files/61033e52-b8f8-467e-a0f8-61c1dfc13cc2.jpg',
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