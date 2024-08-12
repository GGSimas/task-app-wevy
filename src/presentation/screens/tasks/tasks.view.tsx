
import * as Input from '@/presentation/components/input';
import * as S from './styles';
import { AddButton } from './components/add-button';
import { ListHeader } from './components/list-header';
import { FlatList } from 'react-native';
import { ListItem } from './components/list-item';
import { TaskModelReturn } from './task.model';
import { EmptyList } from './components/empty-list';

type TaskViewProps = TaskModelReturn;

export function TaskView({
    taskDescription,
    setTaskDescription,
    tasks,
    handleAddTask,
    tasksDone,
    tasksOpen,
    isLoading,
    handleMarkTaskWasDone,
    handleRemoveTask,
    handleLogout,
    refetch,
    isRefetching
}: TaskViewProps) {
    return (
        <S.Container>
            <S.Header>
                <S.Row>
                    <S.BrandWrapper>
                        <S.TodoIcon />
                        <S.Title>TODO</S.Title>
                    </S.BrandWrapper>

                    <S.LogoutButton onPress={handleLogout}>
                        <S.LogoutIcon />
                    </S.LogoutButton>
                </S.Row>

                <S.InputWrapper>
                    <Input.Default placeholder="Adicione uma nova tarefa" value={taskDescription} onChangeText={setTaskDescription}/>
                    <S.AddButtonWrapper>
                        <AddButton onPress={() => handleAddTask(taskDescription)} />
                    </S.AddButtonWrapper>
                </S.InputWrapper>
            </S.Header>

            <ListHeader open={tasksOpen} done={tasksDone}/>
            
            {isLoading 
                ? <S.Spinner />
                : (
                    <FlatList
                        style={{ flex: 1}}
                        contentContainerStyle={{ padding: 20, paddingBottom: 42 }}
                        refreshControl={<S.RefreseControl refreshing={isRefetching} onRefresh={refetch} />}
                        refreshing
                        data={tasks}
                        keyExtractor={item => String(item.id)}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={<EmptyList />}
                        renderItem={({ item }) => 
                            <ListItem checked={item.done} description={item.description} onDoneTask={() => handleMarkTaskWasDone(item.id)} onDeleteTask={() => handleRemoveTask(item.id)}/>
                        }
                    />
            )}
        </S.Container>
    )
}