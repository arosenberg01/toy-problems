/*

You are given a list of projects and a list of dependencies (a list of pairs of
projects where the first project is dependent on the second project). All of the
projects' dependencies must be built before the project is. Find a valid build 
order that will allow the projects to be built, or return an error if there is
no valid build order.

  input:
    projects: [a, b, c, d, e, f]
    dependencies: [(d, a), (b, f), (d, b), (a, f), (c, d)]
  output:
    [f, e, a, b, d, c]

 */
