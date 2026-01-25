import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    searchGroup: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    searchFormGroup: {
        flex: 1,
    },
    searchControl: {
        width: "100%",
        height: "100%",
    },
    searchControlGroup: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        borderRadius: 10,
        paddingHorizontal: 16,
        height: 50,
    },
    searchFormText: {
        flex: 1,
        fontSize: 16,
        color: "#9E9E9E",
        marginLeft: 8,
    },
    searchButton: {
        marginLeft: 12,
        backgroundColor: "#34967C",
        width: 50,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    filterGroup: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        marginBottom: 24,
        columnGap: 12,
    },
    filterContainer: {
        backgroundColor: "#F6F6F6",
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    listingContainer: {
        marginBottom: 100,
    },
    paginationContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 12,
        marginTop: 24,
        marginBottom: 40,
    },
    showMoreButton: {
        backgroundColor: "#34967C",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    showMoreButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
    },
});