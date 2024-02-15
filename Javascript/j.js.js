function find_diameter_of_tree(root) {
    let maxDiameter = 0;

    // Function to compute height and diameter of each subtree
    function compute_height_and_diameter(node) {
        if (!node) return 0;

        // Recursively compute the height of left and right subtrees
        const leftHeight = compute_height_and_diameter(node.left);
        const rightHeight = compute_height_and_diameter(node.right);

        // Update the maximum diameter encountered so far
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        // Return the height of the current subtree
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Start the recursive computation from the root
    compute_height_and_diameter(root);

    return maxDiameter;
}