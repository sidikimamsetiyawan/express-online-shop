
const displayScheduleTasks = (req, res) => {
    const taskList = req.body.tasks;
    const tasks = new Map();
    const indegrees = new Map();

    try {
  
        // Initialize tasks and in-degrees
        taskList.forEach(task => {
        tasks.set(task.id, { ...task, dependencies: task.dependencies || [] });
        indegrees.set(task.id, 0);
        });
    
        // Build the graph and compute in-degrees
        taskList.forEach(task => {
        task.dependencies.forEach(dep => {
            if (!tasks.has(dep)) return;
            const dependencies = tasks.get(dep).dependencies || [];
            tasks.set(dep, { ...tasks.get(dep), dependencies: [...dependencies, task.id] });
            indegrees.set(task.id, (indegrees.get(task.id) || 0) + 1);
        });
        });
    
        // Topological sort using a queue for tasks ready to execute
        const queue = [];
        tasks.forEach((_, taskId) => {
        if (indegrees.get(taskId) === 0) queue.push(taskId);
        });
    
        const result = [];
        while (queue.length > 0) {
        const current = queue.shift();
        result.push(current);
    
        (tasks.get(current).dependencies || []).forEach(dep => {
            indegrees.set(dep, indegrees.get(dep) - 1);
            if (indegrees.get(dep) === 0) queue.push(dep);
        });
        }
    
        if (result.length !== taskList.length) {
        return { error: 'Cycle detected! Scheduling not possible' };
        }

        return res.json({
            message: 'Tasks successfully scheduled in order of dependencies.',
            data: result
        })

    } catch (error) {
        res.status(500).send(
            {
                message: 'An error occurred while processing task scheduling.',
                error: error
            });
    }
}

module.exports = {
    displayScheduleTasks,
}