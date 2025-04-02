import { useReducer, useState } from "react";
import { Box, Button, TextField, List, ListItem, ListItemText, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle"; // Icon for opening Todo modal
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type Action =
  | { type: "ADD_TASK"; text: string }
  | { type: "TOGGLE_TASK"; id: number }
  | { type: "REMOVE_TASK"; id: number };

const todoReducer = (state: Task[], action: Action) => {
  let newState = state;
  if (action.type === "ADD_TASK") {
    newState = [...state, { id: Date.now(), text: action.text, completed: false }];
  }

  if (action.type === "TOGGLE_TASK") {
    newState = state.map((task: Task) =>
      task.id === action.id ? { ...task, completed: !task.completed } : task
    );
  }

  if (action.type === "REMOVE_TASK") {
    newState = state.filter((task) => task.id !== action.id);
  }

  localStorage.setItem("tasks", JSON.stringify(newState));

  return newState;
};

const Todo = () => {
  const storedTasks = localStorage.getItem("tasks");
  const initialTasks: Task[] = storedTasks ? JSON.parse(storedTasks) : [];

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatch] = useReducer(todoReducer, initialTasks);
  const [open, setOpen] = useState(false); // State to open the Todo modal

  // Function to open the Todo modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the Todo modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* Icon button to open the Todo modal */}
      <IconButton
        onClick={handleOpen}
        sx={{
          position: "fixed",
          top: 15,
          left: 15,
          bgcolor: "primary.main",
          color: "white",
          boxShadow: 3,
          "&:hover": { bgcolor: "primary.dark" },
        }}
      >
        <AddCircleIcon />
      </IconButton>

      {/* Todo List Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Todo List</DialogTitle>
        <DialogContent>
          {/* Input and Add Task Button */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <TextField
              label="Enter your task"
              variant="outlined"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              fullWidth
              sx={{ marginRight: 1 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (taskText.trim() !== "") {
                  dispatch({ type: "ADD_TASK", text: taskText });
                  setTaskText("");
                }
              }}
            >
              Add Task
            </Button>
          </Box>

          {/* Task List */}
          <List>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: task.completed ? "lightgreen" : "lightcoral",
                  mb: 1,
                  borderRadius: 1,
                  padding: 1,
                }}
              >
                <ListItemText
                  primary={task.text}
                  sx={{
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "green" : "red",
                  }}
                />
                <Box>
                  <IconButton
                    onClick={() => dispatch({ type: "TOGGLE_TASK", id: task.id })}
                    color={task.completed ? "success" : "default"}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => dispatch({ type: "REMOVE_TASK", id: task.id })}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Todo;
