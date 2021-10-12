// Topolgical Sorting Using DFS::
class Solution
{
	public:
	//Function to return list containing vertices in Topological order. 
	void dfs(int node, vector<int> adj[], stack<int>&topo, vector<int>&vis){
	    vis[node]=1;
	    for(auto it: adj[node]){
	        if(!vis[it])dfs(it,adj,topo,vis);
	    }
	    topo.push(node);
	}
	vector<int> topoSort(int V, vector<int> adj[]) {
	    stack<int> topo;
	    vector<int> vis(V,0);
	    for(int i=0;i<V;i++){
	        if(!vis[i]){
	            dfs(i, adj, topo, vis);
	        }
	    }
	    vector<int> toposort;
	    while(!topo.empty()){
	        toposort.push_back(topo.top());
	        topo.pop();
	    }
	    return toposort;
	}
};
